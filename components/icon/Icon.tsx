import React, { ComponentProps } from 'react';
import classNames from 'classnames';
import MdiIcon from '@mdi/react';
import icons, { register } from './icons';
import { getPrefixCls } from '../_utils/config';
import warning from '../_utils/warning';

const prefixCls = getPrefixCls('icon');

export interface Props extends Omit<ComponentProps<typeof MdiIcon>, 'path'> {
  name: string;
}

function Icon(props: Props) {
  const { name, className, ...iconProps } = props;

  if (!icons[name]) {
    warning(icons[name], 'icon', `icon ${name} is not exist`);
    return null;
  }

  return (
    <MdiIcon
      aria-label={`icon: ${name}`}
      path={icons[name]}
      size="1em"
      color="currentColor"
      className={classNames(prefixCls, className)}
      {...iconProps}
    />
  );
}

Icon.register = register;

export default Icon;
