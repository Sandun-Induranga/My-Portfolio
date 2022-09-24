let number = "";
for (let i = 0; i < 17; i++) {
    $("#btn"+i).click(function () {
        number += $("#btn"+i).text()
        $(".display input").val(number)
    });
}
