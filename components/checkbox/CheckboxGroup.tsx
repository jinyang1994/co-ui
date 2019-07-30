import React, { ChangeEvent, CSSProperties, ReactElement, ReactChild } from 'react';
import classNames from 'classnames';
import Checkbox, { Props as CheckboxProps } from './Checkbox';
import { transform } from '../_utils/children';
import { runCallback } from '../_utils/function';
import { toString } from '../_utils/string';
import { getPrefixCls } from '../_utils/config';
import * as is from '../_utils/is';
import warning from '../_utils/warning';

const prefixCls = getPrefixCls('checkbox-group');

export interface Props {
  value?: string[];
  className?: string;
  name?: string;
  style?: CSSProperties;
  children?: ReactChild | ReactChild[];
  disabled?: boolean;
  onChange?: (values: string[], e: ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxGroup(props: Props) {
  const { className, style, children, name, disabled, onChange } = props;
  let value = props.value || [];
  const classes = classNames(prefixCls, className);
  if (!is.array(value)) {
    warning(false, 'checkbox-group', 'value is not an array');
    value = Array(toString(value));
  }
  function handleChange(_: string, e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.value;
    const clone = [...value];
    const index = clone.indexOf(selected);

    if (index === -1) {
      clone.push(selected);
    } else {
      clone.splice(index, 1);
    }
    runCallback(onChange, clone, e);
  }

  return (
    <div className={classes} style={style}>
      {
        transform<CheckboxProps>(
          children,
          (checkboxProps) => ({
            name,
            disabled: checkboxProps.disabled || disabled,
            checked: value.indexOf(checkboxProps.value || '') !== -1,
            onChange: handleChange,
          }),
          (element: ReactElement) => (element.type as typeof Checkbox).isCheckbox,
        )
      }
    </div>
  );
}

export default CheckboxGroup;
