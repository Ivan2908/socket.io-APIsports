var app = require('express')();
var http = require('http').Server(app);
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, function(){
  console.log('HTTP server started on port 3000');
})

var io = require('socket.io')(http);
 
io.on('connection', function(socket){
    console.log('Client connection received');

    socket.emit('sendToClient', { hello: 'world' });

    socket.on('receivedFromClient', function (data) {
        console.log(data);
    })
});

var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("1.2", true);
msf.authenticate("Ivan29","ivan2981997");

var MySportsFeeds = require("mysportsfeeds-node");
 
var msf = new MySportsFeeds("1.2", true);
msf.authenticate("********", "*********");
 
var today = new Date();
 
msf.getData('nhl', '2019-2021-regular', 'scoreboard', 'json', { 
    fordate: today.getFullYear() + 
        ('0' + parseInt(today.getMonth() + 1)).slice(-2) + 
        ('0' + today.getDate()).slice(-2),
    force: true
});