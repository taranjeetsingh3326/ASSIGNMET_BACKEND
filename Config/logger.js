let log4js = require('log4js');
log4js.configure({
  appenders: { 
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'logs/application.log' }
    },
  categories: { default: { appenders: ['out', 'app'], level: 'error' } }
});
module.exports = log4js;
