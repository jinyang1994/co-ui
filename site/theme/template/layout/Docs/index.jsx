import React from 'react';
import Menu from './Menu';
import styles from './styles.module.less';

function Docs(props) {
  const { children } = props;
  return (
    <div className={styles.docs}>
      <Menu className={styles.menu} {...props} />
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}

export default Docs;
