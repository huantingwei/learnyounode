var mymodule = require('./6_module_1.js');

var dir_path = process.argv[2];
var file_ext = process.argv[3];
mymodule(dir_path,file_ext,function printfile(err,files){
    if(err){console.log(err);return;}
    printfile(null,files);
})