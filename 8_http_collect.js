/*
    1. Write a program that performs an HTTP GET request to a URL provided to you
       as the first command-line argument. 
    2. Collect all data from the server (not just the first "data" event) 
    3. first line:  an integer representing the number of characters received from the server.
    4  second line: complete String of characters sent by the server.
*/
var bl = require('bl');
var http = require('http');
var str='';
var length=0;
http.get(process.argv[2],(res)=>{
    res.setEncoding('utf8');
    res.on('data',data=>{
        str+=data;
        length+=data.length;
    }) 
    res.on('end',function(){
        console.log(length);
        console.log(str);
    })      
    
});

/*
<official solution>
http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {   //the resulting data parameter is a concatenation of all Buffer objects in the list
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/
/*A stream is an abstract interface implemented by various objects in Node. 
  For example a request to an HTTP server is a stream, as is stdout. 
  Streams are readable, writable, or both. All streams are instances of EventEmitter*/