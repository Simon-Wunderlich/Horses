let horseCount = 0;
let horseSounds = []

const css = "@keyframes slide-in {                                100% { transform: translateX(calc(100vw + 200px)); }                                          }";
const style=document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function _audio(speed, noise) {
horseCount += 1;
const time = window.innerWidth / speed;
for(let i = 0; i < 100 * time / 2; i++) {
	try {
	noise.volume += 1 / (Math.floor(100 * time / 2));
	}
	catch {}
	await sleep(10);
}
for(let i = 0; i < 100 * time / 2; i++) {
	try {
	noise.volume -= 1 / (Math.floor(100 * time / 2));
	}
	catch {}
	await sleep(10);
}
noise.volume = 0;
if (horseCount > 0) {
	horseCount -= 1
}

 const index = horseSounds.indexOf(noise);
if (index > -1) { // only splice if item is found
  horseSounds.splice(index, 1); // 2nd parameter means remove one item only
}
}

async function horse() {
console.log(horseSounds);
const horse = document.createElement("img");
horse.style.position = "absolute";
horse.style.top = Math.random() * (window.innerHeight - 100) + "px";
horse.src="https://www.gifanimate.com/data/media/217/cavallo-immagine-animata-0271.gif";
horse.style.width="100px";
horse.style.left = "-100px";
horse.style.userSelect = "none";
horse.className = "slide-in";

let speed = 250 + Math.random() * 100;
if (Math.floor(Math.random() * 30) == 2) {
	speed = 3000;
	a = new Audio("'cool.mp3');
	a.play();
	_audio(speed / 2, a);
}
else 
    {

	let a =  new Audio('horse.mp3');
	a.volume = 0;
	a.play()
	_audio(speed, a);
	horseSounds.push(a)
	if (horseCount > 10) {
		let deadHorse = horseSounds.shift();
		deadHorse.pause();
	}

    }
const duration = window.innerWidth / speed;
horse.style.animation = `slide-in ${duration}s forwards linear`;

document.body.appendChild(horse);
}

