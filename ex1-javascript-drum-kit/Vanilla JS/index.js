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

soundsArray.forEach(sound => {
    let div = document.createElement('div');
    div.dataset.key = sound.key;
    div.classList.add('key');
    parent.append(div);

    let kbd = document.createElement('kbd');
    kbd.textContent = sound.letter;
    div.append(kbd);

    let soundName = document.createElement('span');
    soundName.className = 'sound';
    soundName.textContent = sound.sound;
    div.append(soundName);
});


soundsArray.forEach(sound => {
    let audio = document.createElement('audio');
    audio.dataset.key = sound.key;
    audio.src = `sounds/${sound.sound}.wav`;
    root.append(audio);
});


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