
const inquirer = require('inquirer');
const download = require('download-git-repo')
exports.usage = '项目初始化';
exports.abbr = 'i';

exports.setOptions = () => {

};

async function createDir(dirName) {
    let res = await fsExtra.ensureDirSync(dirName)
    createConfigFile(res)
}

async function createConfigFile(dirName) {
    download('CcccccD/cli-templates', `${dirName}`, { clone: true }, function (err) {
        err?error('下载模板失败~'):success('下载模板成功~')
    })
}

exports.run = async function () {
    var promps = []
    promps.push({
        type: 'input',
        name: 'ProjectName',
        message: '请输入项目文件夹名称',
        validate: function (input) {
            if (!input) {
                return '不能为空'
            }
            return true
        }
    })
    let answers = await inquirer.prompt(promps);
    let rawName = answers.ProjectName;
    const to = path.resolve(rawName || '.')
    if (fs.existsSync(to)) {
        let res = await inquirer.prompt([{
            type: 'confirm',
            message: '该名字在当前目录下已存在,是否做覆盖操作？',
            name: 'ok'
        }])
        if (res.ok) {
            fsExtra.remove(path.resolve(CWD, rawName), err => {
                if (err) return console.error(err)
                createDir(rawName)
            })
        } else {
            error('创建失败~')
        }
    } else {
        createDir(rawName)
    }
}
