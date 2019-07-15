const { alias } = require('./site/bisheng.config.js');

const config = {
  extends: ['airbnb', 'prettier'],
  plugins: ['markdown'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
        children: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['site/**', 'build/**'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.md'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: Object.entries(alias),
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};

if (process.env.RUN_ENV === 'DEMO') {
  config.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
  };
}

module.exports = config;