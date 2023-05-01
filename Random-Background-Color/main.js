
// Random Background Color

let hexColorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorArray = [];

for (let i = 0; i < 6; i++) {
  colorArray.push(hexColorArray[Math.floor(Math.random() * hexColorArray.length)]);
}

let finalColor = `#${colorArray.join("")}`;

document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;