const fs = fsExtra

function fileExist(filePath){
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}
exports.fileExist = fileExist;


function sleep(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve('')
        }, time)
    })
}
exports.sleep = sleep;