import React, { ReactElement } from 'react';
import Popover, { PopoverProps } from '../popover';

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
      content={title}
      trigger={['hover']}
      placement={placement}
    >
      {children}
    </Popover>
  );
}

export default Tooltip;
