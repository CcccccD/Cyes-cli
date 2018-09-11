

const util = require('../utils/util')
// const chokidar = require('chokidar');
const child_process = require('child_process');
const browserSync = require('browser-sync').create()

let port = '8880'

exports.usage = '本地服务,热编译';
exports.abbr = 's';

exports.setOptions = () => {
    optimist.alias('p', 'port');
    optimist.describe('p', '指定 本地服务端口号');
};


exports.run = async function(options) {
    

    // let preventDuplicationRunner = preventDuplication()    
  
    port = options.p ? options.p :port
    
    // runner()

    // chokidar.watch(path.join(CWD, 'agree.js'), {
    //   ignoreInitial: true
    // }).on('all', () => {
    //   preventDuplicationRunner(runner)
    // })
    await util.sleep(1000)
    server(CWD)
}



// function runner() {
//     const cydocPath = path.resolve(path.dirname(__dirname), '../bin/agree')
//       child_process.exec(`node ${cydocPath} g -v`, function(error, stdout, stderr){
//         if(error) throw error;
//         if(stdout) process.stdout.write(stdout);
//         if(stderr) process.stdout.write(stderr);
//         browserSync.reload()
//         success('更新成功！')
//       })
// }
  
  //防抖
  // function preventDuplication(time = 500) {
  //   let sign = true;
  //   return function (fn, ...arg) {
  //     if (sign === false) return;
  //     sign = false;    
  //     setTimeout(function () {
  //       sign = true;
  //       fn.apply(this, arg);
  //     }, time)
  //   }
  // }
  
  function server(buildPath){
      browserSync.init({
          server: {
              baseDir: `${buildPath}/tem-test`,
          },
          port,
          startPath:'/',
          logLevel: "info",
          notify: false,
          open: "external",
          ghostMode: false
      });
    }
  
