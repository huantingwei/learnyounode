var http = require('http');
var url = process.argv[2];
// http.get() => first argument: the URL you want to GET; second argument: a callback 
/*http.get(url,function callback(response){
    response.setEncoding('utf8');
    response.on("data",function(data){
        var str = '';
        for(var i=0;i<data.length;i++)
        {str += data[i];}
        console.log(str);
    })
})*/

// (parameters)=> 相當於 function(parameters){}
http.get(url,(response)=>{
    response.setEncoding('utf8');
    response.on('data',(data)=>{
        console.log(data);
    });
    
})

/*
<official solution>
    http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  }).on('error', console.error)
*/