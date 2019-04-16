const { createLogger, textMode, jsonMode } = require('.');
const logger = createLogger();
logger.setMode(textMode);
logger.doc('meow');
logger.debug('meow');
logger.info('meow');
logger.warn('meow');
logger.error('meow');
logger.fatal('meow');

logger.setMode(textMode, createLogger.logLevels.DOC);
logger.setMode(jsonMode);
logger.doc('meow');
logger.debug('meow');
logger.info('meow');
const scopedLogger = logger.scoped('root').scoped('child');
scopedLogger.warn('meow');
scopedLogger.error('meow');
scopedLogger.fatal('meow');
