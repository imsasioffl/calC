var num1 = document.getElementById("num1");
var operator = document.getElementById("oper");
var num2 = document.getElementById("num2");
var result = document.getElementById("btn");
var resetBtn = document.getElementById("resetBtn");
var outPutVal = document.getElementById("result");
function printResult() {
    var num1Val = parseFloat(num1.value);
    var num2Val = parseFloat(num2.value);
    var operatorVal = operator.value;
    var resultVal;
    switch (operatorVal) {
        case "+":
            resultVal = num1Val + num2Val;
            break;
        case "-":
            resultVal = num1Val - num2Val;
            break;
        case "*":
            resultVal = num1Val * num2Val;
            break;
        case "/":
            if (num2Val === 0) {
                alert("Cannot divide by zero");
                return;
            }
            resultVal = num1Val / num2Val;
            break;
        default:
            alert("Invalid operator");
            return;
    }
    console.log(num1Val, num2Val, resultVal);
    outPutVal.innerText = "The Answer of ".concat(num1Val, " ").concat(operatorVal, " ").concat(num2Val, " is: ").concat(resultVal);
}
function resetFields() {
    num1.value = "";
    operator.value = "";
    num2.value = "";
    outPutVal.innerText = "";
}
result.addEventListener("click", printResult);
resetBtn.addEventListener("click", resetFields);
