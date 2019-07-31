import React, { ReactChild, ChangeEvent, CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';
import Radio, { Props as RadioProps } from './Radio';
import { transform } from '../_utils/children';
import { runCallback } from '../_utils/function';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('radio-group');

export interface Props {
  name?: string;
  className?: string;
  style?: CSSProperties;
  value?: any;
  children?: ReactChild | ReactChild[];
  disabled?: boolean;
  onChange?: (value: any, e: ChangeEvent<HTMLInputElement>) => void;
}

function RadioGroup(props: Props) {
  const { className, style, children, name, onChange, value, disabled } = props;
  const classes = classNames(prefixCls, className);
  function handleChange(selected: any, e: ChangeEvent<HTMLInputElement>) {
    runCallback(onChange, selected, e);
  }

  return (
    <div className={classes} style={style}>
      {
        transform<RadioProps>(
          children,
          (radioProps) => ({
            name,
            disabled: radioProps.disabled || disabled,
            checked: radioProps.value === value,
            onChange: handleChange,
          }),
          (element: ReactElement) => (element.type as typeof Radio).isRadio,
        )
      }
    </div>
  );
}

export default RadioGroup;
