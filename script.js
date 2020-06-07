let displayValue

let currentOperator

let result

const operate = (operator,num1,num2) => {
    if(operator === "+") return add(num1,num2);
    if(operator === "-") return subtract(num1,num2);
    if(operator === "÷") return divide(num1,num2);
    if(operator === "×") return multiply(num1,num2);
    return "Invalid operator";
}

const storeVals = function() {
    storedNum = displayValue
    display.value = ""
    storedOperator = this.textContent
}

const equalsOperation = () => {
    result = operate(storedOperator, storedNum, displayValue);
    display.value = result;
    displayValue = result;
}

const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const multiply = (num1,num2) => num1 * num2;

const divide = (num1,num2) => num1 / num2;

const display = document.querySelector("#calculatorScreen");

const numberButtons = document  .querySelectorAll(".numberButton");

const operatorButtons = document .querySelectorAll(".operatorButton");

const numberToDisplay = function() {
    if (display.value == result) {
        display.value = "";
    }
    display.value += this.textContent;
    displayValue = +display.value;
}

const equalsButton = document.querySelector("#equalsButton");

numberButtons.forEach(button => button.addEventListener("click", numberToDisplay));

operatorButtons.forEach(button => button.addEventListener("click", storeVals));

equalsButton.addEventListener("click",equalsOperation);