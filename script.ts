const num1 = document.getElementById("num1") as HTMLInputElement;
const operator = document.getElementById("oper") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const result = document.getElementById("btn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const outPutVal = document.getElementById("result") as HTMLOutputElement;

function printResult() {
    let num1Val = parseFloat(num1.value);
    let num2Val = parseFloat(num2.value);
    let operatorVal = operator.value;
    let resultVal: number;

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
    
    outPutVal.innerText = `The Answer of ${num1Val} ${operatorVal} ${num2Val} is: ${resultVal}`;
}

function resetFields() {
    num1.value = "";
    operator.value = "";
    num2.value = "";
    outPutVal.innerText = "";
}

result.addEventListener("click", printResult);
resetBtn.addEventListener("click", resetFields);
