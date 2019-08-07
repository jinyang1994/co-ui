import { cloneElement, ReactElement } from 'react';
import { HOVER, CLICK, FOCUS } from './constants';

export type Trigger = typeof HOVER | typeof CLICK | typeof FOCUS;

export interface Props {
  children: ReactElement;
  active: boolean;
  onTrigger: (active: boolean) => void;
  trigger: Trigger | Array<Trigger>;
}

function Trigger(props: Props) {
  const { children, active, trigger = [CLICK], onTrigger } = props;
  const triggerList = Array.isArray(trigger) ? trigger : [trigger];
  const eventHandlers: {
    [event: string]: () => void;
  } = {};
  const hasHover = triggerList.indexOf(HOVER) !== -1;
  const hasClick = triggerList.indexOf(CLICK) !== -1;
  const hasFocus = triggerList.indexOf(FOCUS) !== -1;

  if (hasHover) {
    eventHandlers.onMouseEnter = () => onTrigger(true);
    eventHandlers.onMouseLeave = () => onTrigger(false);
  }
  if (hasClick) {
    eventHandlers.onClick = () => onTrigger(!active);
  }
  if (hasFocus) {
    eventHandlers.onFocus = () => onTrigger(true);
    eventHandlers.onBlur = () => onTrigger(false);
  }

  return cloneElement(children, eventHandlers);
}

export default Trigger;
