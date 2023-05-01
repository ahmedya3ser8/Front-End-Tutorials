
let serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");

generate.onclick = function() {
  let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYz";
  let charsCount = 10;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serial.innerHTML = randomSerial;
};