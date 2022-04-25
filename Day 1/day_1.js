const play = (e) => {
  const code = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (!audio && !key) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    key.addEventListener("transitionend", (e) => {
      key.classList.remove("playing");
    });
  }
};
window.addEventListener("keydown", play);
