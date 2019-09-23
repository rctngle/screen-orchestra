var socket = io('http://192.168.1.217:3000');
socket.on('connect', function(){
	console.log('controller connect');
});

socket.on('msg', function(data){
	console.log('controller event:', data);
	document.querySelector('iframe#main').setAttribute('src', ' http://127.0.0.1:8080/' + data);
});

socket.on('disconnect', function(){
	console.log('controller disconnect');
});

