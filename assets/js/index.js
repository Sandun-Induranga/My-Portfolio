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
$("#dark, #theme").click(function () {
    if (dark == true) {
        dark = false;
        location.reload();
        return;
    }
    $(this).css("color", "#3A86FF");

    $('.skills > section > div:last-child > section > div:nth-child(2) > div, .services > div > div, .project > aside > section, .project > aside > section > section > div, .gallery > aside > section > div, .skills > section > aside').css('box-shadow', '4px 4px 20px 10px #3C3E58');

    // main image
    $("#main-image").attr("src", "assets/images/main-image-dark.png");
    $("#main-image").css("opacity", "1");

    // top bar
    $('.top-bar').css('background', '#2B2D42');
    $('.top-bar a').css('color', 'white');

    // background
    $('.background').remove();
    $('body').css('background', '#2B2D42');

    $('h1').css('color', 'white');
    $('h2').css('color', 'white');

    // about section
    $('.info, .services > div > div > div > p, .contact > aside > aside > div > h4').css('color', '#ECEFF1');
    $('.info span').css('color', '#EBEBEB');
    $('.des, .project > aside > section > section > div>a').css('color', '#EBEBEB');

    // education
    $('.edu-details > p:first-child, .project > aside > section > section > div').css('color', '#ECEFF1');
    $('.edu-details a').css('color', '#EBEBEB');

    //
    $('.services > div > div, .social-icons > div, .project > aside > section > section > div').css('background', '#2B2D42');

    $('.project > aside > section').css('background', '#2B2D42');
    $('.project > aside > section > div:nth-child(2) > h3').css('color', '#ECEFF1');

    $("input, textarea").css("background", "#3A86FF");
    $("input, textarea").css("opacity", "10%");

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
    "url(assets/images/certificate-3.jpg)",
    "url(assets/images/certificate-4.jpg)",
    "url(assets/images/certificate-5.png)",
    "url(assets/images/certificate-6.png)"
];

let i = 0;

$("#cert-right").click(function () {
    // if (i < certificates.length){
    i++;
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css("background-image", certificates[i]);
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-property', 'all');
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-duration', '2s');
    // }
});

$("#cert-left").click(function () {
    // if (i > 0){
    i--;
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css("background-image", certificates[i]);
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-property', 'all');
    $(".skills > section > div:last-child > section > div:nth-child(2) > div").css('transition-duration', '2s');
    // }
});
