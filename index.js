const createLogger = require('./lib/abstract');
const textMode = require('./lib/text');
const jsonMode = require('./lib/json');

module.exports = {
  createLogger,
  textMode,
  jsonMode,
};
