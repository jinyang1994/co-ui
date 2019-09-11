import React, { ReactElement } from 'react';
import Popover, { PopoverProps } from '../popover';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('tooltip');

type Props = Pick<PopoverProps, 'theme' | 'placement'> & {
  title: ReactElement;
  children: ReactElement;
}

function Tooltip(props: Props) {
  const { children, placement, title, theme = 'dark' } = props;

  return (
    <Popover
      arrow
      theme={theme}
      content={<div className={prefixCls}>{title}</div>}
      trigger={['hover']}
      placement={placement}
    >
      {children}
    </Popover>
  );
}

export default Tooltip;
