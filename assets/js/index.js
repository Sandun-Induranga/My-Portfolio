
// dark mode
$("#dark").click(function () {

    // top bar
    $('.top-bar').css('background','#2B2D42')
    $('.top-bar a').css('color','white')

    $('.background').remove()
    $('body').css('background','#2B2D42')
})
