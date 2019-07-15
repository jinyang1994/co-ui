import React from 'react';
import classNames from 'classnames';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Uploader, Login, Pricing } from '@examples/interface';
import * as Bubbles from  '@theme/template/components/Bubbles';
import Grid from '@theme/template/components/Grid';
import Link from '@theme/template/components/Link';
import { getLocalePath } from '@theme/template/utils';
import common from '../common.module.less';
import styles from './styles.module.less';

function Interface({ locale }) {
  function renderItem(items) {
    return items.map((item, index) => (
      <div key={index} className={styles.item}>
        {item}
      </div>
    ));
  }
  const left = [
    <Uploader />,
    <Pricing />,
  ];
  const right = [
    <div style={{ marginTop: 40 }}>
      <Login />
    </div>,
  ];

  return (
    <div className={styles.page}>
      <ScrollAnim.OverPack
        playScale="0.3"
        className={classNames(common.container, styles.content)}
      >
        <QueueAnim key="0" type="bottom" leaveReverse>
          <h1
            key="0"
            className={classNames(common.title, styles.title)}
          >
            <FormattedMessage id="app.home.interface.title" />
          </h1>
          <p
            key="1"
            className={classNames(common.description, styles.description)}
          >
            <FormattedMessage id="app.home.interface.description" />
          </p>
          <Grid
            key="2"
            className={styles.features}
            data={[
              [
                { icon: 'toolbox-outline', text: 'app.home.interface.feature.a' },
                { icon: 'emoticon-cool-outline', text: 'app.home.interface.feature.b' },
              ],
              [
                { icon: 'package-variant', text: 'app.home.interface.feature.c' },
                { icon: 'google-translate', text: 'app.home.interface.feature.d' },
              ],
            ]}
          />
          <div key="3" className={styles.examples}>
            <Bubbles.Alsace className={styles.bubbles} />
            <div className={styles.items}>
              <div className={styles.column}>
                {renderItem(left)}
              </div>
              <div className={styles.column}>
                {renderItem(right)}
              </div>
            </div>
          </div>
          <Link
            key="4"
            to={getLocalePath('/components/color', locale)}
            className={common.clear}
          >
            <FormattedMessage id="app.home.interface.view">
              {text => text}
            </FormattedMessage>
          </Link>
        </QueueAnim>
      </ScrollAnim.OverPack>
    </div>
  );
}

export default Interface;
