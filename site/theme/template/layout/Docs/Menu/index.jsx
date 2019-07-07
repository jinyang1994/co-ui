import React, { useEffect, useState } from 'react';
import { Link } from 'bisheng/router';
import classNames from 'classnames';
import Switch from '@theme/template/components/Switch';
import { getLocale } from '@theme/template/utils';
import { getMenuData } from './utils';
import styles from './styles.module.less';

function Menu({ picked, location, className }) {
  const isFixed = () => window.pageYOffset > 100;
  const [fixed, setFixed] = useState(false);
  const [opened, setOpened] = useState(false);
  const locale = getLocale(location.query);
  const { docs, components } = getMenuData(picked, locale);

  useEffect(() => {
    const onScroll = () => setFixed(isFixed());

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div
      className={classNames(styles.menu, {
        [styles.fixed]: fixed,
        [styles.opened]: opened,
      }, className)}
    >
      <button className={styles.switch} onClick={() => setOpened(!opened)}>
        <Switch opened={opened} />
      </button>
      <ul className={styles.container}>
        {
          docs.map((item, i) => (
            <li key={i} className={styles.item}>
              <Link to={item.path} activeClassName={styles.active}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))
        }
        <li className={styles.submenu}>
          <h4 className={styles.title}>
            Components
          </h4>
          <ul className={styles.list}>
            {
              components.map((group, i) => (
                <li key={i} className={styles.group}>
                  <div className={styles.title}>
                    {group.title}
                  </div>
                  <ul className={styles.list}>
                    {
                      group.children.map((item, j) => (
                        <li key={j} className={styles.item}>
                          <Link to={item.path} activeClassName={styles.active}>
                            <span>{item.title}</span>
                            <span className={styles.subtitle}>
                              {item.subtitle}
                            </span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
      <div
        className={styles.mask}
        onClick={() => setOpened(false)}
      />
    </div>
  );
}

export default Menu;
