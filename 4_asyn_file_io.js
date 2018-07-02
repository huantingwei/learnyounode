/*
var fs = require('fs');
var myNumber = undefined;

function addOne(callback) 
{
  fs.readFile
  ('number.txt', 
    function doneReading(err, fileContents) 
    {
        myNumber = parseInt(fileContents);
        myNumber++;
        callback();
    }
   )
}
function logMyNumber() {
  console.log(myNumber)
}
addOne(logMyNumber);
*/

/*
var fs = require('fs');
fs.readFile('example.file', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);}
    console.log(data);
});*/
var fs = require('fs');
var file_path = process.argv[2];

fs.readFile(file_path,'utf8',function (err,data){
    if(err){return console.log(err);}
    var count = 0;
    for(var i=0;i<data.length;i++){
        if(data[i]=='\n'){
            count+=1;
        }
    }
    console.log(count);
}); 

