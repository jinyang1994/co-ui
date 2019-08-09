import React, { createRef, Component, RefObject, ReactNode } from 'react';
import classNames from 'classnames';
import { TOP, LEFT, BOTTOM, RIGHT, START, END } from './constants';
import {
  isFixed,
  getScrollParent,
  getOffsetRectRelativeToCustomParent,
  getOuterSizes,
  getOffsetParent,
  getOffsetRect,
  getOppositePlacement,
  getPopperClientRect,
  Rect,
  Direction,
} from './utils';
import { cloneDeep, isEqual } from '../_utils/lodash';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('popper');
const DEFAULT = {
  boundariesElement: 'viewport',
  boundariesPadding: 5,
  offset: 0,
};

type BoundariesElement = 'window' | 'viewport' | HTMLElement;
type BoundariesPadding = number;
type Offset = number;
export type Placement = [Direction, typeof START | typeof END];

interface Options {
  boundariesElement?: BoundariesElement;
  boundariesPadding?: BoundariesPadding;
  offset?: Offset;
}
interface Data {
  flipped: boolean;
  placement: Placement;
  offsets: {
    popper: Rect;
    target: Rect;
    arrow: Pick<Rect, 'top' | 'left'>;
  };
  boundaries: Omit<Rect, 'width' | 'height'>;
}
export interface Props {
  children: ReactNode | ReactNode[];
  arrow?: boolean;
  options?: Options;
  placement?: Placement;
  className?: string;
  getTarget: () => HTMLElement;
  getContainer?: () => HTMLElement;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
interface State {
  placement: Placement;
  position: 'fixed' | 'absolute';
  popper: {
    top: number;
    left: number;
  };
  arrow: {
    top: number;
    left: number;
  };
}

class Popper extends Component<Props, State> {
  public readonly popper: RefObject<HTMLDivElement>;
  private readonly arrow: RefObject<HTMLDivElement>;
  private readonly options: {
    boundariesElement: BoundariesElement;
    boundariesPadding: BoundariesPadding;
    offset: Offset;
  };
  constructor(props: Props) {
    const { placement = [TOP], options = {} } = props;

    super(props);
    this.arrow = createRef();
    this.popper = createRef();
    this.options = Object.assign(DEFAULT, options);
    this.state = {
      placement: placement as Placement,
      position: 'absolute',
      popper: {
        top: 0,
        left: 0,
      },
      arrow: {
        top: 0,
        left: 0,
      },
    };
    this.update = this.update.bind(this);
  }

  private get scrollParent() {
    const popper = this.popper.current as HTMLDivElement;

    return getScrollParent(popper);
  }

  componentDidMount() {
    this.setPosition().then(() => {
      this.update();
      this.setupEventListeners();
    });
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  componentDidUpdate(prevProps: Props) {
    const props = this.props;
    const state = this.state;

    if (isEqual(props, prevProps)) return;
    if (!isEqual(props.placement, state.placement)) {
      /*
       * Update the status first, make sure the style is applied successfully,
       * then recalculate the position.
       */
      this.setState({
        placement: props.placement as Placement,
      }, this.update);
    }
  }

  renderArrow() {
    const { top, left } = this.state.arrow;

    return (
      <div
        ref={this.arrow}
        className={`${prefixCls}-arrow`}
        style={{ top, left }}
      />
    );
  }

  render() {
    const { children, className, arrow, onMouseLeave, onMouseEnter } = this.props;
    const { placement, position } = this.state;
    const { top, left } = this.state.popper;
    const classes = classNames(prefixCls, className);

    return (
      <div
        ref={this.popper}
        className={classes}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{ position, top, left, zIndex: 100000 }}
        data-placement={placement.length === 2 ? placement.join('-') : placement[0]}
      >
        {arrow && this.renderArrow()}
        {children}
      </div>
    );
  }

  /**
   * Update popper state
   * @returns {Promise}
   */
  public update() {
    const { placement = [TOP] } = this.props;
    const offsets = this.getOffsets(placement as Placement);
    const boundaries = this.getBoundaries();
    const data = this.runModifiers({
      offsets: {
        ...offsets,
        arrow: this.state.arrow,
      },
      boundaries,
      placement: placement as Placement,
      flipped: false,
    });
    const { popper, arrow } = data.offsets;

    this.setState({
      placement: data.placement,
      popper: {
        top: popper.top,
        left: popper.left,
      },
      arrow: {
        top: arrow.top,
        left: arrow.left,
      },
    });
  }

  /**
   * Setup event listeners used to update the popper position.
   */
  private setupEventListeners() {
    const { boundariesElement } = this.options;

    window.addEventListener('resize', this.update);
    if (boundariesElement !== 'window') {
      const scrollParent = this.scrollParent;

      if (scrollParent === document.body || scrollParent === document.documentElement) {
        window.addEventListener('scroll', this.update);
      } else {
        scrollParent.addEventListener('scroll', this.update);
      }
    }
  }

  /**
   * Remove all event listeners.
   */
  private removeEventListeners() {
    const { boundariesElement } = this.options;

    window.removeEventListener('resize', this.update);
    if (boundariesElement !== 'window') {
      const scrollParent = this.scrollParent;

      if (scrollParent === document.body || scrollParent === document.documentElement) {
        window.removeEventListener('scroll', this.update);
      } else {
        scrollParent.removeEventListener('scroll', this.update);
      }
    }
  }

  /**
   * Set popper position.
   * If the position container of popper is fixed, then popper should be fixed.
   * @param {() => void} callback
   * @returns {Promise}
   */
  private setPosition() {
    const { getContainer } = this.props;
    const popper = this.popper.current as HTMLDivElement;
    const container = getContainer ? getContainer() : document.body;
    const position = isFixed(popper, container) ? 'fixed' : 'absolute';

    return new Promise((resolve) => this.setState({ position }, resolve));
  }

  /**
   * Get target offsets and popper offsets
   * @param {Placement} placement
   * @returns {{popper: Rect, target: Rect}}
   */
  private getOffsets(placement: Placement) {
    const { position } = this.state;
    const popper = this.popper.current as HTMLDivElement;
    const target = this.props.getTarget();
    const [placementPrefix] = placement;
    const isPopperFixed = position === 'fixed';
    const targetOffsets = getOffsetRectRelativeToCustomParent(target, popper, isPopperFixed);
    const popperRect = getOuterSizes(popper);
    const isHorizontal = [LEFT, RIGHT].indexOf(placementPrefix) !== -1;
    const popperOffsets = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: popperRect.width,
      height: popperRect.height,
    };

    if (isHorizontal) {
      popperOffsets.top = targetOffsets.top + targetOffsets.height / 2 - popperRect.height / 2;
      popperOffsets.left = placementPrefix === LEFT ? targetOffsets.left - popperRect.width : targetOffsets.right;
    } else {
      popperOffsets.left = targetOffsets.left + targetOffsets.width / 2 - popperRect.width / 2;
      popperOffsets.top = placementPrefix === TOP ? targetOffsets.top - popperRect.height : targetOffsets.bottom;
    }
    popperOffsets.right = popperOffsets.left + popperOffsets.width;
    popperOffsets.bottom = popperOffsets.top + popperOffsets.bottom;

    return {
      popper: popperOffsets,
      target: targetOffsets,
    };
  }

  /**
   * Get boundaries size
   * @returns {{top: number; left: number; bottom: number; right: number}}
   */
  private getBoundaries() {
    const { boundariesElement, boundariesPadding } = this.options;
    const popper = this.popper.current as HTMLDivElement;
    const html = document.documentElement;
    let boundaries = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    if (boundariesElement === 'window') {
      const body = document.body;
      const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

      boundaries = {
        top: 0,
        right: width,
        bottom: height,
        left: 0,
      };
    } else if (boundariesElement === 'viewport') {
      const { position } = this.state;
      const offsetParent = getOffsetParent(popper);
      const scrollParent = this.scrollParent;
      const offsetParentRect = getOffsetRect(offsetParent);
      const scrollTop = position === 'fixed' ? 0 : scrollParent.scrollTop;
      const scrollLeft = position === 'fixed' ? 0 : scrollParent.scrollLeft;

      boundaries = {
        top: 0 - (offsetParentRect.top - scrollTop),
        right: html.clientWidth - (offsetParentRect.left - scrollLeft),
        bottom: html.clientHeight - (offsetParentRect.top - scrollTop),
        left: 0 - (offsetParentRect.left - scrollLeft),
      };
    } else {
      const element = boundariesElement as unknown as HTMLElement;

      if (getOffsetParent(popper) === element) {
        boundaries = {
          top: 0,
          left: 0,
          right: element.clientWidth,
          bottom: element.clientHeight,
        };
      } else {
        boundaries = getOffsetRect(element);
      }
    }

    boundaries = {
      top: boundaries.top + boundariesPadding,
      left: boundaries.left + boundariesPadding,
      bottom: boundaries.bottom - boundariesPadding,
      right: boundaries.right - boundariesPadding,
    };

    return boundaries;
  }

  /**
   * Run modifiers
   * @param {Data} data
   * @returns {Data}
   */
  private runModifiers(data: Data) {
    const modifiers = [
      this.shift,
      this.offset,
      this.preventOverflow,
      this.keepTogether,
      this.positionArrow,
      this.flip,
    ];

    return modifiers.reduce((prevData, modifier) => {
      prevData.offsets.popper = getPopperClientRect(prevData.offsets.popper);

      return modifier.call(this, prevData);
    }, data);
  };

  /**
   * Modifier: Shift
   *   Determine the base position of popper
   * @param {Data} data
   * @returns {Data}
   */
  private shift(data: Data) {
    const [prefix, suffix] = data.placement;
    if (!suffix) return data;
    const cloneData = cloneDeep(data);
    const { target, popper } = cloneData.offsets;
    const axis = [BOTTOM, TOP].indexOf(prefix) !== -1 ? 'x' : 'y';
    const shiftOffsets = {
      y: {
        [START]: { top: target.top },
        [END]: { top: target.top + target.height - popper.height },
      },
      x: {
        [START]: { left: target.left },
        [END]: { left: target.left + target.width - popper.width },
      },
    };

    cloneData.offsets.popper = Object.assign(popper, shiftOffsets[axis][suffix]);

    return cloneData;
  }

  /**
   * Modifier: Offset
   *   Calculate the position of popper based on the offset
   * @param {Data} data
   * @returns {Data}
   */
  private offset(data: Data) {
    const { offset } = this.options;
    const [placementPrefix] = data.placement;
    const cloneData = cloneDeep(data);
    const { popper } = cloneData.offsets;

    if (placementPrefix === LEFT) {
      popper.top = popper.top - offset;
    } else if (placementPrefix === RIGHT) {
      popper.top = popper.top + offset;
    } else if (placementPrefix === TOP) {
      popper.left = popper.left - offset;
    } else if (placementPrefix === BOTTOM) {
      popper.left = popper.left + offset;
    }

    return cloneData;
  }

  /**
   * Modifier: Prevent overflow
   *   Prevent popper from exceeding the specified container
   * @param {Data} data
   * @returns {Data}
   */
  private preventOverflow(data: Data) {
    const cloneData = cloneDeep(data);
    const { boundaries, offsets } = cloneData;
    const checkTasks = [
      function checkLeft(rect: Rect): Rect {
        if (rect.left < boundaries.left) {
          return {
            ...rect,
            left: Math.max(rect.left, boundaries.left),
          };
        }
        return rect;
      },
      function checkRight(rect: Rect): Rect {
        if (rect.right > boundaries.right) {
          return {
            ...rect,
            left: Math.min(rect.left, boundaries.right - rect.width),
          };
        }
        return rect;
      },
      function checkTop(rect: Rect): Rect {
        if (rect.top < boundaries.top) {
          return {
            ...rect,
            top: Math.max(rect.top, boundaries.top),
          };
        }
        return rect;
      },
      function checkBottom(rect: Rect): Rect {
        if (rect.bottom > boundaries.bottom) {
          return {
            ...rect,
            top: Math.min(rect.top, boundaries.bottom - rect.height),
          };
        }
        return rect;
      },
    ];

    offsets.popper = checkTasks.reduce((popper, check) => {
      return getPopperClientRect(check(popper));
    }, offsets.popper);

    return cloneData;
  }

  /**
   * Modifier: Keep together
   *   Guarantee that popper is always close to the target
   * @param {Data} data
   * @returns {Data}
   */
  private keepTogether(data: Data) {
    const cloneData = cloneDeep(data);
    const offsets = cloneData.offsets;
    const { target, popper } = offsets;
    const floor = Math.floor;

    if (popper.right < floor(target.left)) {
      offsets.popper.left = floor(target.left) - popper.width;
    }
    if (popper.left > floor(target.right)) {
      offsets.popper.left = floor(target.right);
    }
    if (popper.bottom < floor(target.top)) {
      offsets.popper.top = floor(target.top) - popper.height;
    }
    if (popper.top > floor(target.bottom)) {
      offsets.popper.top = floor(target.bottom);
    }
    offsets.popper = getPopperClientRect(offsets.popper);

    return cloneData;
  }

  /**
   * Modifier: Position arrow
   *   Calculate the position of the arrow to ensure it is always in the target center
   * @param {Data} data
   * @returns {Data}
   */
  private positionArrow(data: Data) {
    if (!this.props.arrow) return data;
    const arrow = this.arrow.current as HTMLDivElement;
    const cloneData = cloneDeep(data);
    const {
      placement: [placementPrefix],
      offsets: { target, popper },
    } = cloneData;
    const isVertical = [LEFT, RIGHT].indexOf(placementPrefix) !== -1;
    const length = isVertical ? 'height' : 'width';
    const side = isVertical ? TOP : LEFT;
    const altSide = isVertical ? LEFT : TOP;
    const opSide = isVertical ? BOTTOM : RIGHT;
    const arrowSize = getOuterSizes(arrow)[length];
    const center = target[side] + (target[length] / 2) - (arrowSize / 2);

    if (target[opSide] - arrowSize < popper[side]) {
      cloneData.offsets.popper[side] -= popper[side] - (target[opSide] - arrowSize);
    }
    if (target[side] + arrowSize > popper[opSide]) {
      cloneData.offsets.popper[side] += (target[side] + arrowSize) - popper[opSide];
    }
    cloneData.offsets.arrow = {
      [side]: Math.max(Math.min(popper[length] - arrowSize, center - popper[side]), 0),
      [altSide]: null,
    } as Pick<Rect, 'top' | 'left'>;

    return cloneData;
  }

  /**
   * Modifier: Flip
   *   Try to flip position when there is not enough space
   * @param {Data} data
   * @returns {Data}
   */
  private flip(data: Data) {
    if (data.flipped && isEqual(data.placement, this.props.placement)) return data;
    let cloneData = cloneDeep(data);
    let [placementPrefix, placementSuffix] = cloneData.placement;
    let placementOpposite = getOppositePlacement(placementPrefix);
    const flipOrder = [placementPrefix, placementOpposite];

    flipOrder.forEach((step, index) => {
      if (placementPrefix !== step || flipOrder.length === index + 1) return;
      const a = [RIGHT, BOTTOM].indexOf(placementPrefix) !== -1;
      const { target, popper } = cloneData.offsets;
      const floor = Math.floor;

      placementPrefix = cloneData.placement[0];
      placementOpposite = getOppositePlacement(placementPrefix);
      if (
        (a && floor(target[placementPrefix]) > floor(popper[placementOpposite])) ||
        (!a && floor(target[placementPrefix]) < floor(popper[placementOpposite]))
      ) {
        cloneData.flipped = true;
        cloneData.placement[0] = flipOrder[index + 1];
        if (placementSuffix) cloneData.placement[1] = placementSuffix;
        cloneData.offsets.popper = this.getOffsets(cloneData.placement).popper;
        cloneData = this.runModifiers(cloneData);
      }
    });

    return cloneData;
  }
}

export default Popper;
