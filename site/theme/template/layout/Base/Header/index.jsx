import React from 'react';
import classNames from 'classnames';
import { Link, IndexLink } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import Switch from '@theme/template/components/Switch';
import { getLocale, getLocalePath } from '@theme/template/utils';
import styles from './styles.module.less';

function Navbar({ themeConfig, location }) {
  const { pathname } = location;
  const locale = getLocale(location.query);
  const { website, github } = themeConfig;
  const [opened, setOpened] = React.useState(false);

  return (
    <header
      className={classNames(styles.header, {
        [styles.fixed]: pathname === '/',
      })}
    >
      <div className={styles.content}>
        <div className={styles.main}>
          <nav className={styles.brands}>
            <Link
              to={getLocalePath('/', locale)}
              className={classNames(styles.link, styles.border, styles.right)}
            >
              <span className={styles.righteous}>Concise UI</span>
            </Link>
            <a
              className={classNames(styles.link, styles.small, styles.border, styles.right)}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.by}>by</span>
              <i className={styles.logo} />
            </a>
            <button
              type="button"
              className={classNames(styles.switch, styles.border, styles.left)}
              onClick={() => setOpened(!opened)}
            >
              <Switch opened={opened} />
            </button>
          </nav>
          <nav
            className={classNames(styles.navigation, {
              [styles.opened]: opened,
            })}
          >
            <IndexLink
              to={getLocalePath('/', locale)}
              className={classNames(styles.link, styles.border, styles.left)}
              activeClassName={styles.active}
            >
              <FormattedMessage id="app.header.overview" />
            </IndexLink>
            <Link
              className={classNames(styles.link, styles.border, styles.left, {
                [styles.active]: /^(components|docs)\/(?!getting-started)/.test(pathname),
              })}
              to={getLocalePath('/docs/visual', locale)}
            >
              <FormattedMessage id="app.header.preview" />
            </Link>
            <a
              className={classNames(styles.link, styles.border, styles.left)}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={classNames('mdi mdi-github-circle', styles.icon)} />
              <span>Github</span>
            </a>
            <Link
              to={getLocalePath('/docs/getting-started', locale)}
              className={classNames(styles.link, styles.border, styles.left)}
              activeClassName={styles.active}
            >
              <FormattedMessage id="app.header.started" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
