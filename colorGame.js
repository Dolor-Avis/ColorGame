var squares = document.querySelectorAll(".square");
var colors = [
/*    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"*/
generateRandColor(),
generateRandColor(),
generateRandColor(),
generateRandColor(),
generateRandColor(),
generateRandColor()
];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


function changeColor(color) {
    for (var i = 0; i<squares.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = (this.style.backgroundColor);
        if (clickedColor === pickedColor) {
            changeColor(clickedColor);
            messageDisplay.textContent = "Correct";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
colorDisplay.textContent = pickedColor;

function pickColor() {
   var random =  Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generateRandColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return bgColor;
}
