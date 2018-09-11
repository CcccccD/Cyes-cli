'use strict';

// Command
exports.getCommands = () => {
    return globby.sync(['*.js'], {
        cwd: CAIYI_COMMANDS_PATH
    }).map((name) => {
        let module = require(path.join(CAIYI_COMMANDS_PATH, name))
        return {
            name: path.basename(name, '.js'),
            abbr: module.abbr,
            module
        };
    }).filter((command) => !!command.module);
};