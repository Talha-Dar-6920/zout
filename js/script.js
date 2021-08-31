//*********************************************************** */
//* NAVIGATION TOGGLE
const navMenu = document.querySelector('.main__nav--menu');
const toggleBtn = document.querySelector('.main__nav--toggle');

toggleBtn.addEventListener('click', (e) => {
  navMenu.classList.toggle('display-flex');
  toggleBtn.classList.toggle('toggle--nav');
});

//*********************************************************** */
//* VIDEO PLAY
const playBtn = document.querySelector('.video__content--play__button');
const video = document.querySelector('.video__content--video');

playBtn.addEventListener('click', () => {
  if (video.paused) video.play();

  playBtn.style.display = 'none';
  video.setAttribute('controls', 'controls');
  video.setAttribute('muted', 'muted');
});
