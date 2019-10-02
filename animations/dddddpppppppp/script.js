var el = document.getElementById('homer');

function cloneHomer() {
	var i = Math.floor(Math.random() * 30000)
	let clone = el.cloneNode( true );

	document.querySelector('body').appendChild( clone )
	clone.setAttribute( 'id', 'homer' + i);
	var _ = document.getElementById('homer' + i);
	_.style.position = 'absolute';
	_.style.top = Math.floor(Math.random() * 100)+ '%';
	_.style.left = Math.floor(Math.random() * 100) + '%';
}

let r = Math.floor(Math.random() * 500) + 100;
setInterval(cloneHomer, r);