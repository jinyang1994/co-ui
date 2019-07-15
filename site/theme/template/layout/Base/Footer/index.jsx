import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.less';

function Footer({ themeConfig }) {
  const { website, email } = themeConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.footer.organization" />
        </a>
        <div className={styles.logo} />
        <a href={`mailto:${email}`}>
          <FormattedMessage id="app.footer.contact" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
