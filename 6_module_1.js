var fs = require('fs');
var path = require('path');
// single function export => no function name
module.exports = function(dir_path,file_ext,lsHandler){
    fs.readdir(dir_path,function callback(err,files){
        if(err){return lsHandler(err);}
        files.forEach(file=>{
            ext = file.split('.')[1];
            if(ext === file_ext){
                lsHandler(file);
            }
        })
    })
}
