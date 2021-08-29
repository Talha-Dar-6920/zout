//*********************************************************** */
//* VIDEO PLAY
const playBtn = document.querySelector('.video__content--play__button');
const video = document.querySelector('.video__content--video');

playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    }
    playBtn.style.display = 'none';
    video.setAttribute('controls', 'controls');
    video.setAttribute('muted', 'muted');
})