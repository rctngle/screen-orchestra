var text = "i love you";

var tokens = text.split('');

// tokens.forEach(function(letter, i){
// 	var span = document.createElement('span');
// 	span.innerText = letter;
	
// });

let counter = 0;
setInterval(function(){
	// document.querySelector('h1').appendChild(span);
	console.log(counter);

	let str = text.substr(0, counter);
	document.querySelector('#iloveyou').innerText = str;
	console.log(str);
	counter++;

	if (counter > tokens.length) {
		counter = 0;
	}
}, 350);