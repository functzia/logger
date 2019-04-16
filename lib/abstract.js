const { logLevels, logLevelsList } = require('./constants');

function createLogger(scope, modes = new Map()) {
  const write = (levelName, args) => {
    for (let [onWrite, minLevel] of modes) {
      if (minLevel <= logLevels[levelName]) {
        onWrite({ level: levelName, scope, args });
      }
    }
  };
  const scoped = newScope =>
    createLogger(scope ? `${scope}/${newScope}` : newScope, modes);
  return {
    scoped,
    setMode(onWrite, level = logLevels.INFO) {
      if (!(level >= 0 && level < logLevelsList.length)) {
        throw new Error('Bad log level ' + lvl);
      }
      modes.set(onWrite, level);
    },
    ...logLevelsList.reduce(
      (methods, levelName, levelNum) => ({
        ...methods,
        [levelName.toLowerCase()]: (...args) => write(levelName, args),
      }),
      {}
    ),
  };
}

module.exports = Object.assign(createLogger, { logLevels });
