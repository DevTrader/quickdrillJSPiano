window.addEventListener('keydown', (e) =>{
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio){console.log("No Audio"); return};
	audio.currentTime = 0; // resets the audio so you can press the key repeatedly
	audio.play();

	key.classList.toggle('playing');

});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
	if(e.propertyName !== 'transform'){return};
	this.classList.remove('playing');
}