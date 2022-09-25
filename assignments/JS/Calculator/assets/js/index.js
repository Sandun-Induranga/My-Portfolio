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
                setOutput("+");
                break;
            case "-":
                setOutput("-");
                break;
            case "x":
                setOutput("x");
                break;
            case "/":
                setOutput("/");
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
        case "-":
            return firstNum - lastNum;
        case "x":
            return firstNum * lastNum;
        case "/":
            return firstNum / lastNum;
    }
}

function setOutput(pressedButton) {
    firstNumber = parseFloat(number);
    number = "";
    operator = pressedButton;
}
