var http = require('http');
var url = "http://http://hweiac.student.ust.hk/";
http.get(url,(res)=>
{
    res.on('data',console.log);
    res.on('error',console.error);
}).on('error', console.error)