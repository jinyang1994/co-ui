import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import { CSSTransition } from '../transition';
import { TOP, CLICK } from './constants';
import Portal from '../portal';
import Popper, { Props as PopperProps, Placement } from './Popper';
import Trigger, { Trigger as TriggerType } from './Trigger';
import * as $ from '../_utils/dom';
import { runCallback } from '../_utils/function';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('popover');

export type Props = Pick<PopperProps, 'arrow' | 'theme' | 'placement' | 'options' | 'getContainer'> & {
  children: ReactElement;
  content: ReactNode | ReactNode[];
  visible: boolean;
  maskClosable?: boolean;
  style?: CSSProperties;
  trigger?: TriggerType | Array<TriggerType>;
  className?: string;
  onChange?: (active: boolean) => void;
}
export interface State {
  active: boolean;
}

class Popover extends React.Component<Props, State> {
  private timer: ReturnType<typeof setTimeout> | null;
  private popperRef: Popper | null;
  constructor(props: Props) {
    super(props);
    this.timer = null;
    this.popperRef = null;
    this.state = {
      active: false,
    };
    this.update = this.update.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  get target() {
    return findDOMNode(this) as HTMLElement;
  }

  get popper() {
    return this.popperRef && (this.popperRef as Popper).popper.current;
  }

  componentDidMount() {
    const { maskClosable = true } = this.props;

    if (maskClosable) document.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    const { maskClosable = true } = this.props;

    if (maskClosable) document.removeEventListener('click', this.handleBodyClick);
  }

  handleBodyClick(e: Event) {
    const eventTarget = e.target as HTMLElement;

    if ($.contains(this.target, eventTarget)) return;
    if (this.popper && $.contains(this.popper, eventTarget)) return;
    this.update(false);
  }

  update(active: boolean) {
    const { onChange } = this.props;

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ active }, () => runCallback(onChange, active));
    }, 80);
  }

  render() {
    const { children, content, trigger = [CLICK], placement = [TOP] as Placement, getContainer, visible, ...popperProps } = this.props;
    const { active } = this.state;
    const [direction] = placement;
    const triggerList = Array.isArray(trigger) ? trigger : [trigger];
    const triggerProps = {
      active,
      onTrigger: this.update,
      trigger: triggerList as Array<TriggerType>,
    };

    return (
      <>
        <Trigger visible={visible} {...triggerProps}>
          {children}
        </Trigger>
        <CSSTransition
          in={active}
          timeout={300}
          classNames={`${prefixCls}-${direction}`}
          unmountOnExit
        >
          <Portal getContainer={getContainer}>
            <Trigger {...triggerProps}>
              <Popper
                {...popperProps}
                ref={(ref) => this.popperRef = ref}
                getContainer={getContainer}
                placement={placement}
                getTarget={() => this.target as HTMLElement}
              >
                {content}
              </Popper>
            </Trigger>
          </Portal>
        </CSSTransition>
      </>
    );
  }
}

export default Popover;
