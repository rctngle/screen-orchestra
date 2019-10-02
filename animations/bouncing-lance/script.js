console.log(window.innerWidth);

var elements = [];
var xSpeeds = [];
var ySpeeds = [];
var numBlobs = 30;

var classes = ['blobbs', 'green', 'red'];

Array(numBlobs).fill().forEach(function(c, i){
	var newDiv = document.createElement('div');
	//var size = 200;
	newDiv.classList.add(classes[Math.floor(Math.random() * classes.length)]);

	
	newDiv.style.left = Math.random() * window.innerWidth;
	newDiv.style.top = Math.random() * window.innerHeight;
	xSpeeds[i] = Math.ceil(Math.random() * 10);
	ySpeeds[i] = Math.ceil(Math.random() * 10);

	elements[i] = newDiv;
	document.body.appendChild(newDiv);
})

window.requestAnimationFrame(move);

function move(){
	elements.forEach(function(div, i){
		var left = parseInt(div.style.left);
		var top = parseInt(div.style.top);		
		
		if(left >= window.innerWidth || left <= 0){
			xSpeeds[i] *= -1;
		}
		if(top >= window.innerHeight || top <= 0){
			ySpeeds[i] *= -1;
		}
		div.style.left = left + xSpeeds[i] + 'px';
		div.style.top = top + ySpeeds[i] + 'px';
	});
	window.requestAnimationFrame(move);
}



// document.addEventListener('click', function(e){
// 	document.querySelector('#follow-mouse').style.left = e.pageX - 100;
// 	document.querySelector('#follow-mouse').style.top = e.pageY - 100;
// });