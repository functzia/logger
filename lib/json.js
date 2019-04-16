const { logLevels } = require('./constants');

module.exports = function jsonMode({ level, scope, args }) {
  const message = {
    level: logLevels[level],
    scope: scope ? scope.split('/') : [],
    args,
    timestamp: Date.now(),
  };
  return console.log(JSON.stringify(message));
};
