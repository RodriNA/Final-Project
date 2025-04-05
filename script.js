let textBox = document.getElementById("fname");
let points = 0;
let score = document.getElementById("points");


function changeBackground(color) {
    let body = document.getElementById("body");
    body.style.backgroundColor = color;
    }
    
function randomColor() {
    let colors = ["red", "orange", "yellow", "lime", "cyan", "blue", "purple"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    changeBackground(randomColor);
    if (textBox.value == randomColor) {
        points = points + 1;
        score.innerHTML = "points: " + points;
    
    }
    else {
        points = points - 1;
        score.innerHTML = "points:" + points;
    }
}