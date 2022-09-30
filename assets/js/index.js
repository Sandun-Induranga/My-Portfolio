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
    $('.services > div > div').css('background','#2B2D42');

    $('.project > aside > section').css('background','#2B2D42');
    $('.project > aside > section > div:nth-child(2) > h3').css('color','#ECEFF1');
});

$("#btnRightProject").click(function () {
    alert("done");
});
