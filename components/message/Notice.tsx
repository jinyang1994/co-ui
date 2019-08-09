import React, { useEffect, cloneElement, ReactNode, ReactElement } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../_utils/config';

const prefixCls = getPrefixCls('notice');

export type Type = 'success' | 'error' | 'warning' | 'info';

export interface Props {
  content: ReactNode;
  duration?: number;
  type?: string;
  icon?: ReactNode;
  onClose: () => void;
}

function Notice(props: Props) {
  const { content, type, duration = 3, onClose } = props;
  const classes = classNames(prefixCls, `${prefixCls}-${type}`);
  let timer: ReturnType<typeof setTimeout> | null = null;
  let icon = null;

  if (props.icon) {
    icon = props.icon;
  } else if (type === 'success') {
    icon = <Icon name="check-circle" />;
  } else if (type === 'error') {
    icon = <Icon name="close-circle" />
  } else if (type === 'info') {
    icon = <Icon name="information" />;
  } else if (type === 'warning') {
    icon = <Icon name="alert" />
  }

  useEffect(() => {
    if (duration) timer = setTimeout(onClose, duration * 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  return (
    <div className={classes}>
      {
        !!icon && cloneElement(icon as ReactElement, {
          className: `${prefixCls}-icon`,
        })
      }
      <span className={`${prefixCls}-text`}>
        {content}
      </span>
      {
        duration === 0 && (
          <button
            className={`${prefixCls}-close`}
            onClick={onClose}
          >
            <Icon name="window-close" />
          </button>
        )
      }
    </div>
  );
}

export default Notice;
