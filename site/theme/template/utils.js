export function getLocale(query) {
  const lang = window.localStorage.getItem('lang') || query.lang;

  switch (lang) {
    case 'zh-cn':
      return 'zh-CN';
    default:
      return 'en-US';
  }
}

export function getLocalePath(path, locale) {
  let lang;

  switch (locale) {
    case 'zh-CN':
      lang = '?lang=zh-cn';
      break;
    default:
      lang = '';
  }

  return path + lang;
}
