# logger

fofx logger lib

## Usage

```js
const { createLogger, textMode, jsonMode } = require('@fofx/logger');
const logger = createLogger();
logger.setMode(textMode, createLogger.logLevels.DOC);
logger.setMode(jsonMode);
const scopedLogger = logger.scoped('root').scoped('child');
logger.doc('meow');
logger.debug('meow');
logger.info('meow');
scopedLogger.warn('meow');
scopedLogger.error('meow');
scopedLogger.fatal('meow');
```

Prints:

```
[16-04-2019 22:02:15.305] [DOC] meow
[16-04-2019 22:02:15.305] [DEBUG] meow
[16-04-2019 22:02:15.305] [INFO] meow
{"level":2,"scope":[],"args":["meow"],"timestamp":1555405335305}
[16-04-2019 22:02:15.305] [WARN] (root/child) meow
{"level":3,"scope":["root","child"],"args":["meow"],"timestamp":1555405335305}
[16-04-2019 22:02:15.305] [ERROR] (root/child) meow
{"level":4,"scope":["root","child"],"args":["meow"],"timestamp":1555405335305}
[16-04-2019 22:02:15.305] [FATAL] (root/child) meow
{"level":5,"scope":["root","child"],"args":["meow"],"timestamp":1555405335305}
```
