import React from 'react';
import classNames from 'classnames';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import Example from '@examples/illustration';
import Grid from '@theme/template/components/Grid';
import Link from '@theme/template/components/Link';
import { getLocalePath } from '@theme/template/utils';
import common from '../common.module.less';
import styles from './styles.module.less';

function Illustration({ locale }) {
  return (
    <div className={styles.page}>
      <ScrollAnim.OverPack
        playScale="0.3"
        className={classNames(common.container, styles.content)}
      >
        <QueueAnim key="0" type="bottom" interval={400}>
          <QueueAnim
            key="0"
            type="bottom"
            interval={200}
            className={styles.left}
          >
            <h1
              key="0"
              className={classNames(common.title, styles.title)}
            >
              <FormattedMessage id="app.home.illustration.title" />
            </h1>
            <p
              key="1"
              className={classNames(common.description, styles.description)}
            >
              <FormattedMessage id="app.home.illustration.description" />
            </p>
            <Grid
              className={styles.features}
              key="2"
              data={[
                [
                  { icon: 'eye-plus-outline', text: 'app.home.illustration.feature.a' },
                ],
                [
                  { icon: 'file-outline', text: 'app.home.illustration.feature.b' },
                  { icon: 'palette-outline', text: 'app.home.illustration.feature.c' },
                ],
              ]}
            />
          </QueueAnim>
          <div key="1" className={styles.right}>
            <div className={styles.examples}>
              <Example />
            </div>
          </div>
          <Link
            key="2"
            className={common.clear}
            to={getLocalePath('/components/illustration', locale)}
          >
            <FormattedMessage id="app.home.illustration.view">
              {text => text}
            </FormattedMessage>
          </Link>
        </QueueAnim>
      </ScrollAnim.OverPack>
    </div>
  );
}

export default Illustration;
