let number = "";

/* Get input from numbers and symbols */
for (let i = 0; i < 17; i++) {
    $("#btn"+i).click(function () {
        number += $("#btn"+i).text();
        $(".display input").val(number);
    });
}

/* Clear display */
$("#btnClear").click(function () {
    number = "";
    $(".display input").val("");
});
