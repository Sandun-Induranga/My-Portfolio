/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

let pumpkinNumber;
let up = false;
let clicked = false;
let ariaValue = 100;
let gameInterval;
let timeInterval;
let decHealth = 10;
let level = 1;

const shotAudio = new Audio("https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg");
const backgroundAudio = new Audio("assets/audio/background.mp3");
const laughAudio = new Audio("assets/audio/laugh.mp3");
const winAudio = new Audio("assets/audio/win-sound.mp3");
backgroundAudio.loop = true;

function ghostAction() {
    clicked = false;
    $(".ghost").attr("style", "background : url(assets/img/ghost.png) !important;");
    pumpkinNumber = chooseRandomPumpkin();
    $(".ghost" + pumpkinNumber).css("top", "0%");
    setTimeout(ghostIn, 1500);
    up = false;
}

function ghostIn() {
    $(".ghost" + pumpkinNumber).css("top", "50%");
}

function chooseRandomPumpkin() {
    return Math.floor(Math.random() * 6);
}

$(".ghost").on("mousedown", function () {
    let top = $(this).css("top");
    if (top == "0px" && !clicked) {
        up = true;
        clicked = true;
        $(".ghost").css("background", "url(assets/img/ghost-attacked.png)");
        ariaValue -= decHealth;
        $(".progress-bar").attr("aria-valuenow", ariaValue);
        $(".progress-bar").css("width", `${ariaValue}%`);
        $("#score").empty();
        $("#score").append(`${100 - ariaValue}/100`);
        if (ariaValue <= 0) {

            backgroundAudio.volume = 0;
            winAudio.play();
            clearInterval(timeInterval);
            clearInterval(gameInterval);

            Swal.fire({
                title: 'You Won..!',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Continue',
                denyButtonText: `Back`,
            }).then((result) => {

                if (result.isConfirmed) {
                    ariaValue = 100;
                    $(".progress-bar").attr("aria-valuenow", 100);
                    $(".progress-bar").css("width", `100%`);
                    level += 1;
                    decHealth--;
                    timerAfterWon();
                    setTimeout(startGame, 3000);
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info');
                }

            });
        }
    }
});

shotAudio.play().catch(e => {
    $(".ghost").on("click", function () {
        if (up) {
            shotAudio.play();
        }
    });
});

backgroundAudio.play().catch(e => {
    $("#btnStart").on("click", function () {
        backgroundAudio.volume = 1;
        backgroundAudio.play();
    });
});

$("#btnStart").on("click", function () {
    startGame();
});

function timer() {
    let x = 60;
    clearInterval(timeInterval);
    timeInterval = setInterval(function () {
        if (x >= 0) {
            $("#txtTime").text(x);
            x--;
        } else {
            laugh();
            laughAudio.play();
            clearInterval(timeInterval);
            $(".over").css("display", "flex");
        }
    }, 1000);
}

function startGame() {
    ariaValue = 100;
    $("#btnStart").css("display", "none");
    $("#btnStop").css("display", "block");
    $("#main-image").css("display", "none");
    $(".progress-bar").attr("aria-valuenow", 100);
    $(".progress-bar").css("width", `100%`);
    $("#score").empty();
    $("#score").append(`00/100`);
    backgroundAudio.volume = 1;
    $(".over").css("display", "none");
    $("#lblLevel").text("Level " + level);
    clearInterval(gameInterval);
    gameInterval = setInterval(ghostAction, 2000);
    timer();
}

function timerAfterWon() {
    let x = 3;
    let wonInterval = null;
    clearInterval(wonInterval);
    $(".message").css("display", "flex");
    wonInterval = setInterval(function () {
        if (x >= 0) {
            $(".message > p, .message > h1").empty();
            $(".message > h1").append("Level " + level);
            $(".message > p").append(x == 0 ? "" : x);
        } else {
            clearInterval(wonInterval);
            $(".message").css("display", "none");
            $(".message > p").append("...");
            return;
        }
        x--;
    }, 1000);
}

function laugh() {
    backgroundAudio.volume = 0;
    laughAudio.addEventListener("canplaythrough", () => {

    });
}

$(".over > button").on("click", function () {
    ariaValue = 100;
    $(".progress-bar").css("width", `100%`);
    startGame();
});

$("#btnStop").on("click", function () {
    clearInterval(timeInterval);
    clearInterval(gameInterval);
    startGame();
})
