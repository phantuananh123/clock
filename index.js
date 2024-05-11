const handhour = document.querySelector("hour-hand");
const handminute = document.querySelector("minute-hand");
const handsecond = document.querySelector("second-hand");

function setRotariton(hand, rotatio) {
  hand.style.setProperty("--rotation", rotatio);
}
function setOclock() {
  const currenDate = new Date();
  const hour = currenDate.getHours() / 60;
  const minute = currenDate.getMinutes() / 60;
  const second = currenDate.getSeconds() / 60;
  // console.log(hour, minute, second);
  setRotariton(handhour, hour * 360);
  setRotariton(handminute, minute * 360);
  setRotariton(handsecond, second * 360);
}
setOclock();
