import React, { HTMLAttributes, Children, ReactNode, cloneElement } from 'react';
import classNames from 'classnames';
import Button, { Size } from './Button';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('btn-group');

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<Button>[];
  size?: Size;
}

function ButtonGroup(props: Props) {
  const { className, children, size } = props;
  const classes = classNames(prefixCls, className);
  const nodes: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (!child) return;
    if (child.type && (child.type as typeof Button).isButton) {
      nodes.push(child);
    }
  });

  return (
    <div
      className={classes}
      {...props}
    >
      {Children.map(nodes, item => cloneElement(item as Button, { size }))}
    </div>
  );
}

export default ButtonGroup;
