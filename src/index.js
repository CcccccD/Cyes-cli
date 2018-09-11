
'use strict';

require('./global');

const Manager = require('./modules/manager')

let helpTitle = `\n===================== Cyes ${version} ====================\n`;

let initOptions = (cmd) => {
    if (cmd.setOptions) {
        cmd.setOptions(optimist);
    }
    optimist.alias('h', 'help');
    optimist.describe('h', '查看帮助');
    let options = optimist.argv;
    options.cwd = process.cwd();
    return options;
};


let cyes = {
    run(){
        const option = process.argv[2];
        
        // 处理辅助命令
        if (option === '-v' || option === '--version') {
            return log(version);
        } else if (option === '-h' || option === '--help' || !option) {
            return cyes.help();
        }
        // 处理核心命令
        let command = Manager.getCommands().filter((command) => command.name === option || command.abbr === option)[0];
        if (!command) {
            error('Command ' + option + ' not found.');
            return;
        }
        let module = command.module;
        let options = initOptions(module);
        if (options.h || options.help) {
            info(helpTitle);
            info('命令:', option);
            info('说明:', module.usage || '');
            info();
            optimist.showHelp();
            info(' 如果需要帮助, 请使用 cyes {命令名} --help ');
        } else {
            module.run(options);
        }
    },
    help(){
        info(helpTitle);
        Manager.getCommands().forEach((command) => {
            const commandStr = rightPad(rightPad(command.name, 12) + (command.abbr || ''), 25);
            info(` ${commandStr} # ${command.module.usage || ''}`);
        });
        info();
        info(' 如果需要帮助, 请使用 cyes {命令名} --help\n');
    }
}

module.exports = cyes