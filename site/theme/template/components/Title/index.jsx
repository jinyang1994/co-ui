import React from 'react';
import DocumentTitle from 'react-document-title';
import styles from './styles.module.less';

function Title({ meta }) {
  let { title } = meta;

  if (meta.subtitle) title += ` ${meta.subtitle}`;

  return (
    <DocumentTitle title={`${title} - Concise UI`}>
      <h1 className={styles.title}>{title}</h1>
    </DocumentTitle>
  );
}

export default Title;
