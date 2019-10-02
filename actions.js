var socket = io('http://172.17.26.96:3000');
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

window.onload = function() {
	const video = document.querySelector('video');
	console.log(video);
};
