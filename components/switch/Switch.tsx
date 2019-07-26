import React, { HTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { runCallback } from '../_utils/function';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('switch');

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: boolean;
  size?: 'large' | 'small';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}

function Switch(props: Props) {
  const { value: checked, size, disabled, loading, style, onChange, className, ...otherProps } = props;
  const classes = classNames(prefixCls, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-active`]: checked,
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-loading`]: loading,
  }, className);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (disabled || loading) return;
    runCallback(onChange, e.target.checked, e);
  }

  return (
    <label
      aria-checked={checked}
      className={classes}
      style={style}
    >
      <input
        {...otherProps}
        type="checkbox"
        disabled={disabled || loading}
        checked={checked}
        onChange={handleChange}
      />
      <span className={`${prefixCls}-dot`}>
        {loading && <Icon name="loading" className={`${prefixCls}-spin`} spin={0.8} />}
      </span>
    </label>
  );
}

export default Switch;
