import React, { ButtonHTMLAttributes, Children, ReactChild, MouseEvent } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import ButtonGroup from './ButtonGroup';
import { runCallback } from '../_utils/function';
import { isReactText } from '../_utils/children';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('btn');

export type Size = 'small' | 'large' | 'normal';
export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  htmlType?: 'button' | 'submit' | 'reset';
  fill?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: Size;
  children?: ReactChild | ReactChild[];
}

function Button(props: Props) {
  const { children, className, htmlType, type, fill, icon, loading, size, onClick, disabled, ...btnProps } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-fill`]: fill,
    [`${prefixCls}-loading`]: loading,
  });
  const nodes: ReactChild[] = [];
  let isPrevReactText = false;
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (disabled || loading) return;
    runCallback(onClick, e);
  }

  if (loading) {
    nodes[0] = <Icon name="loading" className={`${prefixCls}-icon`} spin={0.8} />;
  } else if (icon) {
    nodes[0] = <Icon name={icon} className={`${prefixCls}-icon`} />;
  }
  if (children) {
    Children.forEach(children, (child) => {
      const isCurrentReactText = isReactText(child);

      if (isPrevReactText && isCurrentReactText) {
        const lastIndex = nodes.length - 1;

        nodes[lastIndex] = `${nodes[lastIndex]}${child}`;
      } else {
        nodes.push(child);
      }
      isPrevReactText = isCurrentReactText;
    });
  }

  return (
    <button
      type={htmlType}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      {...btnProps}
    >
      {Children.map(nodes, (node) => isReactText(node) ? <span>{node}</span> : node)}
    </button>
  );
}

Button.Group = ButtonGroup;
Button.isButton = true;

export default Button;
