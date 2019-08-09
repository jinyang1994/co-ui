import React, { cloneElement, createRef, useState, useEffect, ReactElement, ReactNode } from 'react';
import { CSSTransition } from '../transition';
import { TOP } from './constants';
import Portal from '../portal';
import Popper, { Props as PopperProps, Placement } from './Popper';
import Trigger, { Props as TriggerProps, Trigger as TriggerType } from './Trigger';
import * as $ from '../_utils/dom';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('popover');

type Props = Pick<TriggerProps, 'trigger'> & Pick<PopperProps, 'arrow' | 'placement' | 'options' | 'getContainer'> & {
  children: ReactElement;
  content: ReactNode | ReactNode[];
  className?: string;
}

function Popover(props: Props) {
  const { children, content, className, trigger, placement = [TOP], getContainer, ...popperProps } = props;
  const [direction] = placement;
  const [active, setActive] = useState(false);
  let timer: ReturnType<typeof setTimeout> | null = null;
  const triggerProps = {
    active,
    onTrigger(nextActive: boolean) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(setActive, 80, nextActive);
    },
    trigger: trigger as TriggerType,
  };
  const target = createRef();
  let popperInstance: Popper | null = null;

  useEffect(() => {
    function handleClick(e: Event) {
      const eventTarget = e.target as HTMLElement;
      const targetCurrent = target.current as HTMLElement;

      if ($.contains(targetCurrent, eventTarget)) return;
      if (popperInstance && popperInstance.popper.current) {
        const popperCurrent = popperInstance.popper.current as HTMLElement;

        if ($.contains(popperCurrent, eventTarget)) return;
      }
      setActive(false);
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });

  return (
    <>
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
              ref={(ref) => popperInstance = ref}
              getContainer={getContainer}
              placement={placement as Placement}
              getTarget={() => target.current as HTMLElement}
            >
              {content}
            </Popper>
          </Trigger>
        </Portal>
      </CSSTransition>
      <Trigger {...triggerProps}>
        {cloneElement(children, { ref: target })}
      </Trigger>
    </>
  );
}

export default Popover;
