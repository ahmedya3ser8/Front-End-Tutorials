let input = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let output = "";
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      output = eval(output);
    } else if (e.target.innerHTML == "AC") {
      output = ""
    } else if (e.target.innerHTML == "DEL") {
      output = output.slice(0, -1);
    } else {
      output += e.target.innerHTML;
    }
    input.value = output;
  });
}));