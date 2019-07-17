import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../utils/config';

const prefixCls = getPrefixCls('btn');

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  htmlType?: 'button' | 'submit' | 'reset';
  fill?: boolean;
}

function Button(props: Props) {
  const { children, className, htmlType, type, fill, ...btnProps } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}-fill`]: fill,
  });

  return (
    <button
      type={htmlType}
      className={classes}
      {...btnProps}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
