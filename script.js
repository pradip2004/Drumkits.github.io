window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"`);
    // console.log(audio);
    if (!audio) {
        return;
    }
    audio.currentTime = 0; //rewind the audio
    audio.play();
    let key = document.querySelector(`.key[data-key = "${e.keyCode}"`);
    key.classList.add('playing');
})
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


console.log("all is ok!!");