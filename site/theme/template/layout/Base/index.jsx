import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocale from '@theme/locales/en-US';
import cnLocale from '@theme/locales/zh-CN';
import { getLocale } from '@theme/template/utils';
import Header from './Header';
import Footer from './Footer';
import './styles.less';

const locales = {
  [enLocale.locale]: enLocale,
  [cnLocale.locale]: cnLocale,
};

function Layout(props) {
  const { location, children } = props;
  const locale = locales[getLocale(location.query)];

  addLocaleData(locale.data);

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <div>
        <Header {...props} />
        {children}
        <Footer {...props} />
      </div>
    </IntlProvider>
  );
}

export default Layout;
