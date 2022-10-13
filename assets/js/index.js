// loading animation
$(document).ready(function () {
    $("header, main, footer").css("display", "none");
    $("body> div").css("display", "block");
});

$(window).on("load", function () {
    $("header, main, footer").css("display", "block");
    $("body> div").css("display", "none");
});

// dark mode
$("#dark").click(function () {

    // top bar
    $('.top-bar').css('background', '#2B2D42');
    $('.top-bar a').css('color', 'white');

    // background
    $('.background').remove();
    $('body').css('background', '#2B2D42');

    $('h1').css('color', 'white');
    $('h2').css('color', 'white');

    // about section
    $('.info').css('color', '#ECEFF1');
    $('.info span').css('color', '#EBEBEB');
    $('.des').css('color', '#EBEBEB');

    // education
    $('.edu-details > p:first-child').css('color', '#ECEFF1');
    $('.edu-details a').css('color', '#EBEBEB');

    //
    $('.services > div > div').css('background', '#2B2D42');

    $('.project > aside > section').css('background', '#2B2D42');
    $('.project > aside > section > div:nth-child(2) > h3').css('color', '#ECEFF1');
});

let pos = 0;

$("#btnRightProject").click(function () {
    if (pos > -100) {
        pos -= 25;
        $(".project > aside > section>section").css('transform', `translate(${pos}%)`);
        $("#btnLeftProject").attr("disabled", false);
    }
    if (pos == -50) {
        $("#btnRightProject").attr("disabled", true);
    }
    console.log(pos);
});

$("#btnLeftProject").click(function () {
    if (pos < 0) {
        pos += 25;
        $(".project > aside > section>section").css('transform', `translate(${pos}%)`);
        $("#btnRightProject").attr("disabled", false);
        console.log(pos);
    }
    if (pos == 50) {
        $("#btnLeftProject").attr("disabled", true);
    }
    console.log(pos);
});

// certificate slide
let certificates = [
    "certificate-1.png",
    "certificate-2.png",
    "certificate-3.jpg"
]
