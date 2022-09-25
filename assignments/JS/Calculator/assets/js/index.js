let number = "";
let firstNumber = 0;
let lastNumber = 0;
let operator = "";

/* Get input from numbers and symbols */
for (let i = 0; i < 17; i++) {
    $("#btn" + i).click(function () {
        let pressedBtn = $("#btn" + i).text();
        if (pressedBtn === "+") {
            firstNumber = parseFloat(number);
            number = "";
            operator = "+";
            $(".display input").val(number);
        } else if (pressedBtn === "-") {
            firstNumber = parseFloat(number);
            number = "";
            operator = "-";
            $(".display input").val(number);
        } else if (pressedBtn === "=") {
            lastNumber = parseFloat(number);
            number = ""
            let ans = operations(operator, firstNumber, lastNumber);
            $(".display input").val(ans);
            number = ans;
        } else {
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
        case "-":
            return firstNum - lastNum;
            break;
    }
}

/* Clear display */
$("#btnClear").click(function () {
    number = "";
    $(".display input").val("");
});
