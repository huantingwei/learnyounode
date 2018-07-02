/* Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
  */


var net = require('net');
var strftime = require('strftime');
var strftimeHK = strftime.timezone('+0800');

var port = process.argv[2];
var server = net.createServer(function(socket){
    var data = strftimeHK("%Y-%m-%d %H:%M",new Date())+'\n';
    socket.end(data);
    //or use socket.write(data) + socket.end()
});
server.listen(port);


/*var date = new Date();
  var month = date.getMonth();
  if(month<10){month="0"+month;}
  var day = date.getDate();
  if(day<10){day="0"+day;}
  var data = date.getFullYear()+"-"+month+"-"+day+" "+date.getHours()+":"+date.getMinutes()
*/

/* official solution
var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}
function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}
var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))
*/

/*
localize 'strftime'
var it_IT = {
        days: ['domenica', 'lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato'],
        shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
        months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
        shortMonths: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
        AM: 'AM',
        PM: 'PM',
        am: 'am',
        pm: 'pm',
        formats: {
            D: '%m/%d/%y',
            F: '%Y-%m-%d',
            R: '%H:%M',
            X: '%T',
            c: '%a %b %d %X %Y',
            r: '%I:%M:%S %p',
            T: '%H:%M:%S',
            v: '%e-%b-%Y',
            x: '%D'
        }
    }
var strftimeIT = strftime.localize(it_IT)
*/