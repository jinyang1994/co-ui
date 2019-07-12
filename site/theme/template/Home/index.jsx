import React from 'react';
import { FormattedMessage } from 'react-intl';
import DocumentTitle from 'react-document-title';
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
    <FormattedMessage id="app.home.banner.title">
      {
        text => (
          <DocumentTitle title={`Concise UI - ${text}`}>
            <div className={styles.home}>
              <Banner locale={locale} {...props} />
              <Interface locale={locale} {...props} />
              <Illustration locale={locale} {...props} />
              <Skeleton locale={locale} {...props} />
            </div>
          </DocumentTitle>
        )
      }
    </FormattedMessage>

  );
}

export default Home;
