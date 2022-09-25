let number = "";
let firstNumber = 0;
let lastNumber = 0;
let operator = "";

/* Get input from numbers and symbols */
for (let i = 0; i < 17; i++) {
    $("#btn" + i).click(function () {
        let pressedBtn = $("#btn" + i).text();
        switch (pressedBtn) {
            case "C":
                firstNumber = "";
                lastNumber = "";
                operator = "";
                number = "";
                break;
            case "+":
                firstNumber = parseFloat(number);
                number = "";
                operator = "+";
                break;
            case "-":
                firstNumber = parseFloat(number);
                number = "";
                operator = "-";
                break;
            case "x":
                firstNumber = parseFloat(number);
                number = "";
                operator = "x";
                break;
            case "=":
                lastNumber = parseFloat(number);
                number = ""
                let ans = operations(operator, firstNumber, lastNumber);
                number = ans;
                break;
            default:
                number += pressedBtn;
        }
        $(".display input").val(number);
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
        case "x":
            return firstNum * lastNum;
            break;
    }
}
