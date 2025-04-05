function changeBackground(color) {
    let body = document.getElementById("body");
    body.style.backgroundColor = color;
    }
    
    function randomColor() {
        let colors = ["red", "orange", "yellow", "lime", "cyan", "navy blue", "dark purple", "pink"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        changeBackground(randomColor);
    }