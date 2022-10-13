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
let dark = false;
$("#dark").click(function () {
    if (dark == true){
        dark = false;
        location.reload();
        return;
    }
    $('.skills > section > div:last-child > section > div:nth-child(2) > div, .services > div > div, .project > aside > section, .project > aside > section > section > div, .gallery > aside > section > div, .skills > section > aside').css('box-shadow', '4px 0 76px 10px #3A86FF');

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

    dark = true;
});

let pos = 0;

$("#btnRightProject").click(function () {
    if (pos > -100) {
        pos -= 25;
        $(".project > aside > section>section").css('transform', `translate(${pos}%)`);
        $(".project > aside > section>section").css('transition-property', 'all');
        $(".project > aside > section>section").css('transition-duration', '2s');
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
    "url(assets/images/certificate-1.png)",
    "url(assets/images/certificate-2.png)",
    "url(assets/images/certificate-3.jpg)"
];

let i = 1;

$("#cert-right").click(function () {
    // if (i < certificates.length){
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css("background-image", certificates[i]);
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-property', 'all');
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-duration', '2s');
    i++;
    // }
});

$("#cert-left").click(function () {
    // if (i > 0){
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css("background-image", certificates[i]);
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-property', 'all');
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-duration', '2s');
    i--;
    // }
});
