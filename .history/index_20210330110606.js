var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Global variable to store the latest NHL results
var latestData;

// Load the NHL data for when client's first connect
// This will be update every 10 minutes
data.getData().then((result) => {
    latestData = result;
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, function(){
  console.log('HTTP server started on port 3000');
})
 
io.on('connection', function(socket){
    // When clients connect, send the latest data
    socket.emit('data', latestData);
});

// refresh data
setInterval(function() {
    data.getData().then((result) => { 
        // Update latest results for when new client's connect
        latestData = result; 
     
        // send it to all connected clients
        io.emit('data', result);
         
        console.log('Last updated: ' + new Date());
    });
}, 300000);