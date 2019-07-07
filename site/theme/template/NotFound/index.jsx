import React from 'react';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import { getLocale, getLocalePath } from '@theme/template/utils';
import bg from '@theme/static/not-found.svg';
import styles from './styles.module.less';

function NotFound({ location }) {
  const locale = getLocale(location.query);

  return (
    <div className={styles.page}>
      <img src={bg} alt="not-found" />
      <h3 className={styles.title}>
        <FormattedMessage id="app.not-found.title" />
      </h3>
      <p className={styles.description}>
        <FormattedMessage id="app.not-found.description" />
        <Link to={getLocalePath('/', locale)}>
          <FormattedMessage id="app.not-found.home" />
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
