'use strict';
exports.get = function (modules) {
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          isTSX: true,
        },
      ],
      'babel-plugin-inline-import-data-uri',
      '@babel/plugin-transform-member-expression-literals',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-transform-property-literals',
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
        },
      ],
      '@babel/plugin-transform-spread',
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
