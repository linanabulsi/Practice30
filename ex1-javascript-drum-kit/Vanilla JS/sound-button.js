export function createSoundButton({key,letter,sound}){
    let soundButton = document.createElement('div');
    soundButton.setAttribute('data-key', key);
    soundButton.classList.add('key');

    let kbd = document.createElement('kbd');
    kbd.append(letter);

    let soundName = document.createElement('span');
    soundName.classList.add('sound');
    soundName.append(sound);

    soundButton.append(kbd, soundName);
    

    let audio = document.createElement('audio');
    audio.dataset.key = key;
    audio.src = `sounds/${sound}.wav`;

    return {soundButton, audio};
}