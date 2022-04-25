const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

const secCon = document.querySelector(".digital-sec");
const minCon = document.querySelector(".digital-min");
const hourCon = document.querySelector(".digital-hour");

const addOn = (num) => {
  if (num < 10) {
    let z = "0";
    return (z += num.toString());
  } else {
    return num;
  }
};

const setDate = () => {
  const now = new Date();
  //   secs
  const seconds = now.getSeconds();
  const secDeg = (seconds / 60) * 360 + 90;
  sec.style.transform = `rotateZ(${secDeg}deg)`;
  secCon.innerHTML = addOn(seconds);

  //   mins
  const mins = now.getMinutes();
  const minDeg = (mins / 60) * 360 + 90;
  min.style.transform = `rotateZ(${minDeg}deg)`;
  minCon.innerHTML = addOn(mins);

  //   hours
  const hours = now.getHours();
  const hourDeg = (hours / 12) * 360 + 90;
  hour.style.transform = `rotateZ(${hourDeg}deg)`;
  hourCon.innerHTML = addOn(hours);
};

setInterval(setDate, 1000);
