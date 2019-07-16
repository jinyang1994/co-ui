'use strict';
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.less?$/);

req.keys().forEach(req);

module.exports = require('./components');
