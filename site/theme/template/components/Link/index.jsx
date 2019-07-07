import React from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'bisheng/router';
import styles from './styles.module.less';

function Link({ className, children, circle, icon = true, ...others }) {
  return (
    <RouterLink
      className={classNames(styles.link, {
        [styles.circle]: circle,
      }, className)}
      {...others}
    >
      {icon && <i className={classNames(styles.icon, 'mdi mdi-arrow-right')} />}
      <span className={styles.text}>{children}</span>
    </RouterLink>
  );
}

export default Link;
