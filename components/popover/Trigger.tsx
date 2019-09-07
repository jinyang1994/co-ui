import { useEffect, cloneElement, ReactElement } from 'react';
import { HOVER, CLICK, FOCUS, MANUAL } from './constants';
import { runCallback } from '../_utils/function';

export type Trigger = typeof HOVER | typeof CLICK | typeof FOCUS | typeof MANUAL;

export interface Props {
  children: ReactElement;
  active: boolean;
  onTrigger: (active: boolean) => void;
  visible?: boolean;
  trigger: Array<Trigger>;
}

function Trigger(props: Props) {
  const { children, active, visible, trigger = [CLICK], onTrigger } = props;
  const childrenProps = children.props;
  const eventHandlers: {
    [event: string]: (e: Event) => void;
  } = {};
  const hasHoverTrigger = trigger.indexOf(HOVER) !== -1;
  const hasClickTrigger = trigger.indexOf(CLICK) !== -1;
  const hasFocusTrigger = trigger.indexOf(FOCUS) !== -1;
  const hasManualTrigger = trigger.indexOf(MANUAL) !== -1;
  function handleTrigger(eventName: string, value: boolean) {
    eventHandlers[eventName] = (e: Event, ...args: any) => {
      runCallback(childrenProps[eventName], ...args);
      onTrigger(value);
      e.stopPropagation();
    };
  }

  if (hasManualTrigger && visible !== undefined) {
    useEffect(() => {
      if (visible !== active) onTrigger(visible);
    }, [visible]);
  }
  if (hasHoverTrigger) {
    handleTrigger('onMouseEnter', true);
    handleTrigger('onMouseLeave', false);
  }
  if (hasClickTrigger) {
    handleTrigger('onClick', !active);
  }
  if (hasFocusTrigger) {
    handleTrigger('onFocus', true);
    handleTrigger('onBlur', false);
  }

  return cloneElement(children, eventHandlers);
}

export default Trigger;
