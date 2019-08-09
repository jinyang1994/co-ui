import React, { ReactElement, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import { CSSTransition } from '../transition';
import { TOP } from './constants';
import Portal from '../portal';
import Popper, { Props as PopperProps, Placement } from './Popper';
import Trigger, { Props as TriggerProps, Trigger as TriggerType } from './Trigger';
import * as $ from '../_utils/dom';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('popover');

export type Props = Pick<TriggerProps, 'trigger'> & Pick<PopperProps, 'arrow' | 'theme' | 'placement' | 'options' | 'getContainer'> & {
  children: ReactElement;
  content: ReactNode | ReactNode[];
  className?: string;
}

class Popover extends React.Component<Props, any> {
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
    document.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBodyClick);
  }

  handleBodyClick(e: Event) {
    const eventTarget = e.target as HTMLElement;

    if ($.contains(this.target, eventTarget)) return;
    if (this.popper && $.contains(this.popper, eventTarget)) return;
    this.update(false);
  }

  update(active: boolean) {
    this.setState({ active });
  }

  render() {
    const { children, content, className, trigger, placement = [TOP], getContainer, ...popperProps } = this.props;
    const { active } = this.state;
    const [direction] = placement;
    const triggerProps = {
      active,
      onTrigger: (nextActive: boolean) => {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(this.update, 80, nextActive);
      },
      trigger: trigger as TriggerType,
    };

    return (
      <>
        <Trigger {...triggerProps}>
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
                className={className}
                ref={(ref) => this.popperRef = ref}
                getContainer={getContainer}
                placement={placement as Placement}
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
