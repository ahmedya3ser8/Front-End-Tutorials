
// End Of The Year
let countDownDate = new Date("Dec 31 2023 23:59:59").getTime();

let count = setInterval(() => {
  // Current Date And Time
  let dateNow = new Date().getTime();
  // difference between countDownDate and dateNow
  let diff = countDownDate - dateNow;
  // Time Units
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
  let minutes = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((diff % (1000 * 60) / 1000));
  // Apply in the page
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  // difference less than 0 Stop The Timer
  if (diff < 0) {
    clearInterval(count);
  }
}, 1000);