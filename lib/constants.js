const logLevelsList = ['DOC', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'];
const logLevels = logLevelsList.reduce(
  (map, levelName, idx) => ({
    ...map,
    [levelName]: idx,
  }),
  {}
);

module.exports = {
  logLevels,
  logLevelsList,
};
