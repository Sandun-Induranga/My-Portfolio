var initArray = [];
var leftColors = ['white', 'white', 'white', 'white', 'white', 'white', '#d3c5c5', '#be7474', '#cd4a4a', '#b83030', '#c52525', '#dc1e1e'];
var rightColors = ['white', 'white', 'white', 'white', 'white', 'white', '#dc1e1e', '#c52525', '#b83030', '#cd4a4a', '#be7474', '#d3c5c5'];
let interval;

const audio = new Audio("assets/audio/KnightRider.mp3");

function animateRight() {
    let firstValue = initArray.shift();
    initArray.push(firstValue);
}

function animateLeft() {
    let lastColor = initArray.pop();
    initArray.unshift(lastColor);
}

var count = 0;

function animate() {
    count++;
    if (count <= leftColors.length) {
        initArray = leftColors;
        animateLeft();
    } else {
        if (count >= (leftColors.length * 2)) {
            count = 0;
        }
        initArray = rightColors;
        animateRight();
    }
}
audio.addEventListener("canplaythrough", () => {
    audio.loop = true;
    audio.play().catch(e => {
        $("#btnStart").click(function () {
                audio.play();
        })
    })
});

function renderKnightRider() {
    $("#container").empty();
    for (let i = 0; i < (initArray.length) / 2; i++) {
        $("#container").append(`<div style="background-color: ${initArray[i]}"></div>`)
    }
    animate();
}

$("#btnStart").on("click", function () {
    clearInterval(interval);
    interval = setInterval(renderKnightRider, 100);
});
