import { getLocalePath } from '@theme/template/utils';

const typeOrder = {
  'General': 0,
  'Layout': 1,
  'Navigation': 2,
  'Data Entry': 3,
  'Data Display': 4,
  'Feedback': 5,
  'Other': 6,
  'Deprecated': 7,
  '通用': 0,
  '布局': 1,
  '导航': 2,
  '数据录入': 3,
  '数据展示': 4,
  '反馈': 5,
  '其他': 6,
  '废弃': 7,
};

function getLocaleItems(items, locale) {
  const excludedSuffix = locale === 'zh-CN' ? 'en-US.md' : 'zh-CN.md';

  return items.filter(({ meta }) => !meta.filename.endsWith(excludedSuffix)).map(item => item.meta);
}

function getItem(item, locale) {
  const { filename, ...others } = item;
  const path = filename.replace(/(\/index)?((\.zh-CN)|(\.en-US))?\.md$/i, '');

  return {
    path: getLocalePath(path, locale),
    ...others,
  };
}

export function getMenuData(picked, locale) {
  const sortFn = (a, b) => (a.order || 0) - (b.order || 0);
  const docs = getLocaleItems(picked.docs, locale).map((item) => getItem(item, locale)).sort(sortFn);
  const components = {};

  getLocaleItems(picked.components, locale).forEach((meta) => {
    const { type } = meta;
    const group = components[type];
    const item = getItem(meta, locale);

    if (!group) {
      components[type] = {
        title: type,
        children: [item],
        order: typeOrder[type],
      };
    } else {
      group.children.push(item);
    }
  });

  return {
    docs,
    components: Object.values(components).sort(sortFn),
  };
}




