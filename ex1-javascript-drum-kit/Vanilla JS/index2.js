import {createSoundButton} from './sound-button.js'
const root = document.querySelector('#root');
console.log(root);
console.log(root.childNodes);

const soundsArray = [
    { key: 65, letter: 'A', sound: 'clap' },
    { key: 83, letter: 'S', sound: 'hithat' },
    { key: 68, letter: 'D', sound: 'kick' },
    { key: 70, letter: 'F', sound: 'openhat' },
    { key: 71, letter: 'G', sound: 'boom' },
    { key: 72, letter: 'H', sound: 'ride' },
    { key: 74, letter: 'J', sound: 'snare' },
    { key: 75, letter: 'K', sound: 'tom' },
    { key: 76, letter: 'L', sound: 'tink' }
];


let parent = document.createElement("div");
parent.classList.add('keys');
root.append(parent);

const soundBtns = soundsArray.map(sound => {
    return createSoundButton(sound);
    
});

parent.append(...soundBtns.map(el=>el.soundButton));
root.append(...soundBtns.map(el=>el.audio));




function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
