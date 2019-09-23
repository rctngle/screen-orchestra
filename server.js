const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const clients = [];

app.use(express.static('.'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});	

app.get('/controller', function(req, res){
	res.sendFile(__dirname + '/controller.html');
});	

app.get('/monitor', function(req, res){
	res.sendFile(__dirname + '/monitor.html');
});	

http.listen(3000, function(){
	console.log('http://'+ip.address()+':3000');
});

io.on('connection', function(client){
	clients.push(client);
	// console.log(clients.length);


	client.on('disconnect', function() {
		clients.splice(clients.indexOf(client), 1);
	});


	client.on('msg', function(msg){
		console.log(clients.length);
		client.broadcast.emit('msg', msg);
		// clients.forEach((client) => {
		// 	console.log('broadcasting: ', msg);
		// 	client.emit('msg', msg);
		// });
	});
});