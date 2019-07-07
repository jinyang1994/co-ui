import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.less';

function Markdown({ children, className }) {
  return (
    <section className={classNames(styles.markdown, className)}>
      {children}
    </section>
  );
}

export default Markdown;
