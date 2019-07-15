import React from 'react';
import classNames from 'classnames';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import Example from '@examples/skeleton';
import * as Bubbles from '@theme/template/components/Bubbles';
import Grid from '@theme/template/components/Grid';
import Link from '@theme/template/components/Link';
import { getLocalePath } from '@theme/template/utils';
import common from '../common.module.less';
import styles from './styles.module.less';

function Skeleton({ locale }) {
  return (
    <div className={styles.page}>
      <ScrollAnim.OverPack
        playScale="0.3"
        className={classNames(common.container, styles.content)}
      >
        <QueueAnim key="0" type="bottom" interval={400}>
          <QueueAnim key="0" interval={200} className={styles.right}>
            <h1
              key="0"
              className={classNames(common.title, styles.title)}
            >
              <FormattedMessage id="app.home.skeleton.title" />
            </h1>
            <p
              key="1"
              className={classNames(common.description, styles.description)}
            >
              <FormattedMessage id="app.home.skeleton.description" />
            </p>
            <Grid
              className={styles.features}
              key="2"
              data={[
                [
                  { icon: 'eye-settings-outline', text: 'app.home.skeleton.feature.a' },
                  { icon: 'cube-unfolded', text: 'app.home.skeleton.feature.b' },
                ],
              ]}
            />
          </QueueAnim>
          <div key="1" className={styles.left}>
            <div className={styles.examples}>
              <Bubbles.Alsace className={styles.bubbles} />
              <Example />
            </div>
          </div>
          <Link
            key="2"
            className={common.clear}
            to={getLocalePath('/components/skeleton', locale)}
          >
            <FormattedMessage id="app.home.skeleton.view">
              {text => text}
            </FormattedMessage>
          </Link>
        </QueueAnim>
      </ScrollAnim.OverPack>
    </div>
  );
}

export default Skeleton;
