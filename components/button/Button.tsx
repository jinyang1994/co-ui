import React, { ButtonHTMLAttributes, Children, ReactChild } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import ButtonGroup from './ButtonGroup';
import { getPrefixCls } from '../_utils/config';
import { isReactText } from '../_utils/children';

const prefixCls = getPrefixCls('btn');

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  htmlType?: 'button' | 'submit' | 'reset';
  fill?: boolean;
  icon?: string;
  loading?: string;
  children?: ReactChild | ReactChild[];
}

function Button(props: Props) {
  const { children, className, htmlType, type, fill, icon, loading, ...btnProps } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: !!type,
    [`${prefixCls}-fill`]: fill,
    [`${prefixCls}-loading`]: loading,
  });
  const nodes: ReactChild[] = [];
  let isPrevReactText = false;

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
      {...btnProps}
    >
      {Children.map(nodes, (node) => isReactText(node) ? <span>{node}</span> : node)}
    </button>
  );
}

Button.Group = ButtonGroup;
Button.isButton = true;

export default Button;
