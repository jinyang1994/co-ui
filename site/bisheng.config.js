const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('../package.json');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  hash: true,
  port: 9000,
  source: {
    components: './components',
    docs: './docs',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/document.html',
  themeConfig: {
    github: pkg.homepage,
    version: pkg.version,
    website: 'https://concise.online',
    email: 'support@concise.online'
  },
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config.resolve.alias = {
      'co-ui': path.join(process.cwd(), 'index.js'),
      '@examples': path.join(process.cwd(), 'site/examples'),
      '@theme': path.join(process.cwd(), 'site/theme'),
    };
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(process.cwd(), 'site/theme/static'),
          to: 'public',
          ignore: ['.*']
        },
      ]),
    );

    if (isDev) config.devtool = 'source-map';

    return config;
  },
};