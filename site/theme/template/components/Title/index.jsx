import React from 'react';
import styles from './styles.module.less';

function Title({ children }) {
  return (
    <h1 className={styles.title}>{children}</h1>
  );
}

export default Title;
