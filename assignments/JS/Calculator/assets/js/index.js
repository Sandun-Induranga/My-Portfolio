let number = "";
let firstNumber = 0;
let lastNumber = 0;
let operator = ""

/* Get input from numbers and symbols */
for (let i = 0; i < 17; i++) {
    $("#btn" + i).click(function () {
        let pressedBtn = $("#btn" + i).text();
        if (pressedBtn === "+") {
            firstNumber = number;
            number = ""
            pressedBtn = ""
            operator = "+"
            $(".display input").val(number);
        } else if (pressedBtn === "=") {
            lastNumber = number;
            number = ""
            pressedBtn = ""
            let ans = operations(operator, firstNumber, lastNumber);
            $(".display input").val(ans);
        }else {
            number += pressedBtn;
            $(".display input").val(number);
        }
    });
}

function operations(operator, firstNum, lastNum) {
    switch (operator) {
        case "+":
            return firstNum + lastNum;
            break;
    }
}

/* Clear display */
$("#btnClear").click(function () {
    number = "";
    $(".display input").val("");
});
