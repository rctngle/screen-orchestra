const ip = '172.17.26.21';
document.querySelector('#ip').innerHTML = ip;

var socket = io('http://' + ip + ':3000');
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

fetch('http://' + ip + ':3000/animations-actions').then(response => response.json()).then(data => {
	for (let list in data) {
		data[list].forEach((item) => {
			const listItem = document.createElement('li');
			listItem.innerHTML = `<button type="button">${item}</button>`;
			document.querySelector('#'+list).appendChild(listItem);

			listItem.querySelector('button').addEventListener('click', () => {
				socket.emit('msg', list+'/'+item);
			});
		});
	}
});
