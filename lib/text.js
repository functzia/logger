const chalk = require('chalk');
const timestamp = require('time-stamp');

function getColor(level) {
  switch (level) {
    case 'DOC':
      return chalk.green;
    case 'DEBUG':
      return chalk.blue;
    case 'INFO':
      return chalk.cyan;
    case 'WARN':
      return chalk.yellow;
    case 'ERROR':
      return chalk.red;
    case 'FATAL':
      return chalk.yellow.bgRed;
    default:
      return text => text;
  }
}

module.exports = function textMode({ args, level, scope }) {
  const parts = [
    `[${timestamp('DD-MM-YYYY HH:mm:ss.ms')}]`,
    `[${getColor(level)(level)}]`,
  ];
  if (scope) {
    parts.push(`(${scope})`);
  }
  return console.log(...parts, ...args);
};
