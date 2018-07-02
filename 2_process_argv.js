// process.argv is the array containing the complete command-line
// but as string

// [ 'C:\\Program Files\\nodejs\\node.exe','C:\\uSERS\\USER\\nodeschool\\process_argv.js','1','2','3' ]
// process.argv[0] is the "node"
// process.argv[1] is the path to the file
// [2] above is the argument put in the command lines
var sum = 0;
for(var i=0;i<process.argv.length-2;i++)
{
    sum += Number(process.argv[i+2]);
}
console.log(sum);
