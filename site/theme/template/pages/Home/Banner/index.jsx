import React from 'react';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Pricing, Charts, Card, Uploader, Payment, Preview, Popup } from '@examples/banner';
import * as Bubbles from '@theme/template/components/Bubbles';
import Link from '@theme/template/components/Link';
import { getLocalePath } from '@theme/template/utils';
import common from '../common.module.less';
import styles from './styles.module.less';

function Banner({ themeConfig, locale }) {
  function renderItems(items) {
    return items.map((item, index) => (
      <div
        key={index}
        className={classNames(styles.item, {
          [styles.fixed]: !!item.fixed,
        })}
        style={{...item.fixed}}
      >
        {item.children}
      </div>
    ))
  }
  const left = [
    {
      children: <Charts />,
    },
    {
      children: <Card />,
    },
    {
      fixed: { top: 280, left: -100 },
      children: (
        <div className={classNames(styles.pendulum, styles.one)}>
          <Preview />
        </div>
      ),
    },
  ];
  const right = [
    {
      children: <Pricing />,
    },
    {
      children: <Uploader />,
    },
    {
      fixed: { top: 250, right: -230 },
      children: (
        <div className={classNames(styles.pendulum, styles.two)}>
          <Payment />
        </div>
      ),
    },
    {
      fixed: { top: 480, left: -30 },
      children: (
        <div className={classNames(styles.pendulum, styles.three)}>
          <Popup />
        </div>
      ),
    },
  ];

  return (
    <QueueAnim
      type="bottom"
      interval={250}
      className={styles.banner}
    >
      <QueueAnim
        key="0"
        delay={300}
        type="right"
        interval={250}
        className={classNames(common.container, styles.content)}
      >
        <div key="0" className={styles.logo} />
        <h1
          key="1"
          className={classNames(common.title, styles.title)}
        >
          <FormattedMessage id="app.home.banner.title" />
        </h1>
        <p
          key="2"
          className={classNames(common.description, styles.description)}
        >
          <i className={styles.react} />
          <FormattedMessage id="app.home.banner.support">
            {text => <span className={styles.text}>{text}</span>}
          </FormattedMessage>
        </p>
        <div key="3">
          <Link
            circle
            icon={false}
            className={styles.install}
            to={getLocalePath('/docs/getting-started', locale)}
          >
            <FormattedMessage id="app.home.banner.started" />
          </Link>
          <a
            className={styles.preview}
            href={themeConfig.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="app.home.banner.preview" />
          </a>
        </div>
      </QueueAnim>
      <div key="1" className={styles.examples}>
        <Bubbles.Jaina className={styles.bubbles} />
        <div className={styles.items}>
          <QueueAnim
            type="bottom"
            delay={500}
            interval={500}
            className={styles.column}
          >
            {renderItems(left)}
          </QueueAnim>
          <QueueAnim
            type="bottom"
            delay={400}
            interval={600}
            className={styles.column}
          >
            {renderItems(right)}
          </QueueAnim>
        </div>
      </div>
    </QueueAnim>
  );
}

export default Banner;
