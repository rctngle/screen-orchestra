var socket = io('http://172.17.26.21:3000');
socket.on('connect', function(){
	console.log('monitor connect');
});

socket.on('slider', function(data){
	if (window.onSliderChange) {
		window.onSliderChange(data);
	}
});

socket.on('text', function(data){
	if (window.onTextChange) {
		window.onTextChange(data);
	}
});
