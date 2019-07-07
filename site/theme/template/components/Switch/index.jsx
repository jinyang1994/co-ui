import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.less';

function Switch({ opened, className }) {
  return (
    <i
      className={classNames(styles.switch, {
        [styles.opened]: opened,
      }, className)}
    />
  );
}

export default Switch;
