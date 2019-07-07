const path = require('path');

module.exports = {
  routes: {
    path: '/',
    component: './template/layout/Base',
    indexRoute: { 
      component: './template/Home',
    },
    childRoutes: [
      {
        path: '',
        component: './template/layout/Docs',
        childRoutes: [
          {
            path: 'docs/:name',
            component: './template/Article',
          },
          {
            path: 'components/:name',
            component: './template/Component',
          },
        ],
      },
    ],
  },
  lazyLoad(nodePath, nodeValue) {
    return typeof nodeValue === 'string' || nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;

      // ignore no-components and demo markdown files
      if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
        return null;
      }

      return {
        meta: markdownData.meta,
      };
    },
    docs(markdownData) {
      const { filename } = markdownData.meta;

      if (!/^docs/.test(filename)) {
        return null;
      }

      return {
        meta: markdownData.meta,
      };
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-preview',
    'bisheng-plugin-api-doc',
    'bisheng-plugin-react?lang=__react',
  ],
};