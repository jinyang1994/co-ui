import React from 'react';
import classNames from 'classnames';
import MdiIcon from '@mdi/react';
import icons from './icons';
import { getPrefixCls } from '../_utils/config';
import warning from '../_utils/warning';

const prefixCls = getPrefixCls('icon');

interface Props extends Omit<React.ComponentProps<typeof MdiIcon>, 'path'> {
  name: string;
}
type Icon = React.FunctionComponent<Props> & {
  register?: (name: string, path: string) => void;
};

const Icon: Icon = (props: Props) => {
  const { name, className, ...iconProps } = props;

  if (!icons[name]) {
    warning(icons[name], 'icon', `icon ${name} is not exist`);
    return null;
  }

  return (
    <MdiIcon
      path={icons[name]}
      size="1em"
      color="currentColor"
      className={classNames(prefixCls, className)}
      {...iconProps}
    />
  );
};

export default Icon;
