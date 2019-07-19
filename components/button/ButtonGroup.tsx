import React, { HTMLAttributes, Children, ReactNode, ReactComponentElement } from 'react';
import classNames from 'classnames';
import Button from './Button';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('btn-group');

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactComponentElement<typeof Button> | ReactComponentElement<typeof Button>[];
}

function ButtonGroup(props: Props) {
  const { className, children } = props;
  const classes = classNames(prefixCls, className);
  const nodes: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (!child) return;
    if (child.type && child.type.isButton) {
      nodes.push(child);
    }
  });

  return (
    <div
      className={classes}
      {...props}
    >
      {Children.map(nodes, item => item)}
    </div>
  );
}

export default ButtonGroup;
