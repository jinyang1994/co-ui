const config = require('../.eslintrc');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'react/no-danger': 0,
    'react/no-array-index-key': 0,
  },
};
