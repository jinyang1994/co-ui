import React, { cloneElement, createRef, useState, ReactElement, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TOP, CLICK } from './constants';
import Popper, { Props as PopperProps, Placement } from './Popper';
import Trigger, { Props as TriggerProps, Trigger as TriggerType } from './Trigger';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('popover');

type Props = Pick<TriggerProps, 'trigger'> & Pick<PopperProps, 'placement' | 'options'> & {
  children: ReactElement;
  content: ReactNode | ReactNode[];
}

function Popover(props: Props) {
  const { children, content, trigger = [CLICK], placement = [TOP], ...popperProps } = props;
  const [direction] = placement;
  const [active, setActive] = useState(false);
  const target = createRef();

  return (
    <>
      <CSSTransition
        in={active}
        timeout={300}
        classNames={`${prefixCls}-${direction}`}
        unmountOnExit
      >
        <Popper
          {...popperProps}
          placement={placement as Placement}
          getTarget={() => target.current as HTMLElement}
        >
          {content}
        </Popper>
      </CSSTransition>
      <Trigger
        trigger={trigger as TriggerType}
        active={active}
        onTrigger={setActive}
      >
        {cloneElement(children, { ref: target })}
      </Trigger>
    </>
  );
}

export default Popover;
