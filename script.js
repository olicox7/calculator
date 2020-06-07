let displayValue

let currentOperator

let result

let storedOperator = null

const operate = (operator,num1,num2) => {
    if(operator === "+") return add(num1,num2);
    if(operator === "-") return subtract(num1,num2);
    if(operator === "÷") return divide(num1,num2);
    if(operator === "×") return multiply(num1,num2);
    return "Invalid operator";
}

const storeVals = function() {
    if(display.value == "") return
    if(depressedOperatorCheck()){
        return
    }
    if(storedOperator != null){
        subTotal = operate(storedOperator, storedNum, displayValue);
        storedNum = null
        display.value = subTotal;
        displayValue = subTotal;
    }
    this.classList.add("depressedOperator")
    storedNum = displayValue
    storedOperator = this.textContent
    displayValue = null
}

const equalsOperation = () => {
    if(depressedOperatorCheck()){
        return
    }
    result = operate(storedOperator, storedNum, displayValue);
    storedNum = null
    storedOperator = null
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
    if(depressedOperatorCheck() != undefined){
        let depressedButton = depressedOperatorCheck();
        depressedButton.classList.remove("depressedOperator")
    } 
    if (display.value == result || displayValue == null) {
        display.value = "";
        result = null;
    }
    display.value += this.textContent;
    displayValue = +display.value;
}

const equalsButton = document.querySelector("#equalsButton");

numberButtons.forEach(button => button.addEventListener("click", numberToDisplay));

operatorButtons.forEach(button => button.addEventListener("click", storeVals));

const depressedOperatorCheck = () => {
let operatorArray = Array.from(operatorButtons)
let depressedButton = operatorArray.find(button => button.classList.contains("depressedOperator"))
return depressedButton
}

equalsButton.addEventListener("click",equalsOperation);