var socket = io('http://localhost:3000');
socket.on('connect', function(){
	console.log('controller connect');
});

socket.on('event', function(data){
	console.log('controller event');
});

socket.on('disconnect', function(){
	console.log('controller disconnect');
});

document.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		socket.emit('msg', link.getAttribute('href'));
	});
});