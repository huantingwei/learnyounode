var fs = require('fs');
// path of the file
var file_path = process.argv[2];
/*  Buffer objects are Node's way of efficiently representing arbitrary arrays
of data, whether it be ascii, binary or some other format. Buffer objects
can be converted to strings by simply calling the toString() method on
them. e.g. var str = buf.toString()*/

var file = fs.readFileSync(file_path);
var buffer = file.toString();

var count = 0;
for(var i=0;i<buffer.length;i++)
{
    if(buffer[i]==="\n")
    {
        count+=1;
    }
}
console.log(count);

/*  solution

    var fs = require('fs')
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/