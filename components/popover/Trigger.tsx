import { cloneElement, ReactElement } from 'react';
import { HOVER, CLICK, FOCUS } from './constants';
import { runCallback } from '../_utils/function';

export type Trigger = typeof HOVER | typeof CLICK | typeof FOCUS;

export interface Props {
  children: ReactElement;
  active: boolean;
  onTrigger: (active: boolean) => void;
  trigger?: Trigger | Array<Trigger>;
}

function Trigger(props: Props) {
  const { children, active, trigger = [CLICK], onTrigger } = props;
  const childrenProps = children.props;
  const triggerList = Array.isArray(trigger) ? trigger : [trigger];
  const eventHandlers: {
    [event: string]: (e: Event) => void;
  } = {};
  const hasHoverTrigger = triggerList.indexOf(HOVER) !== -1;
  const hasClickTrigger = triggerList.indexOf(CLICK) !== -1;
  const hasFocusTrigger = triggerList.indexOf(FOCUS) !== -1;
  function handleTrigger(eventName: string, value: boolean) {
    eventHandlers[eventName] = (e: Event, ...args: any) => {
      runCallback(childrenProps[eventName], ...args);
      onTrigger(value);
      e.stopPropagation();
    };
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
