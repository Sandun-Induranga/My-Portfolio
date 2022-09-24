let number = "";
let firstNumber = 0;
let lastNumber = 0;

/* Get input from numbers and symbols */
for (let i = 0; i < 17; i++) {
    $("#btn" + i).click(function () {
        let pressedBtn = $("#btn" + i).text();
        if (pressedBtn==="+"){
            firstNumber = number;
            number = ""
            pressedBtn = ""
        }
        number += pressedBtn;
        $(".display input").val(number);
    });
}

/* Clear display */
$("#btnClear").click(function () {
    number = "";
    $(".display input").val("");
});
