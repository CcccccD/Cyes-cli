'use strict';

require('colors');

global.packageJson = require('../package.json');
global.version = packageJson.version;
global.path = require('path');
global.url = require('url');
global.fs = require('fs');

global.logSymbols = require('./utils/log-symbols');
global.rightPad = require('./utils/right-pad');
global.optimist = require('optimist');
global.globby = require('globby');
global.fsExtra = require('fs-extra');

global.CWD = process.cwd();
global.CAIYI_COMMANDS_PATH = path.join(__dirname, './commands');

global.info = console.info;
global.success = function() {
    info(logSymbols.success, (' '+Array.prototype.join.call(arguments, ' ')).green);
};
global.error = function() {
    info(logSymbols.error, (' '+ Array.prototype.join.call(arguments, ' ')).red);
};
global.warn = function() {
    info(logSymbols.warning, (' '+ Array.prototype.join.call(arguments, ' ')).yellow);
};
global.log = function() {
    info(('[CaiYi] ').gray + Array.prototype.join.call(arguments, ' '));
};

global.logError = function() {
    info(('[error] ').red + Array.prototype.join.call(arguments, ' '));
};
global.logWarn = function() {
    info(('[warn] ').yellow + Array.prototype.join.call(arguments, ' '));
};
global.logInfo = function() {
    info(('[info] ').blue + Array.prototype.join.call(arguments, ' '));
};
global.logDoc = function() {
    info(('[doc] ').blue + 'Visit ' + Array.prototype.join.call(arguments, ' ').underline + ' for doc.');
};
global.logMock = function() {
    info(('[mock] ').cyan + Array.prototype.join.call(arguments, ' '));
};

global.debug = function() {
    info();
    info(('[CaiYi debug] ').gray + Array.prototype.join.call(arguments, ' '));
    info();
};