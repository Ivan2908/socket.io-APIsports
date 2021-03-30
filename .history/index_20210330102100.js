var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.js');
});

http.listen(3000, function() {
    console.log('HTTP server started on port 3000');
});

io.on('connection', function(socket){
    console.log('Client connection received');
});

