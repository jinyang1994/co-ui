import React from 'react';
import { getLocale } from '@theme/template/utils';
import Banner from './Banner';
import Interface from './Interface';
import Illustration from './Illustration';
import Skeleton from './Skeleton';
import styles from './common.module.less';

function Home(props) {
  const { location } = props;
  const locale = getLocale(location.query);

  return (
    <div className={styles.home}>
      <Banner locale={locale} {...props} />
      <Interface locale={locale} {...props} />
      <Illustration locale={locale} {...props} />
      <Skeleton locale={locale} {...props} />
    </div>
  );
}

export default Home;
