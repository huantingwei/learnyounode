/*  The fs.readdir() method takes a pathname as its first argument and a
    callback as its second. The callback signature is:
    function callback (err, list) {  ...  }
    where list is an array of filename strings.*/

//path.extname('index.html') returns '.html'
var fs = require('fs');
var path = require('path');
var file_path = process.argv[2];
var file_ext = '.' + process.argv[3];
fs.readdir(file_path,function(err,list){
    if(err){console.log(err);}
    for(var i=0;i<list.length;i++){
        if(path.extname(list[i])===file_ext){
            console.log(list[i]);
        }
    }
    /*
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    */
})
