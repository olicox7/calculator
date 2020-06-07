const display = document.querySelector("#calculatorScreen");
const numberButtons = document.querySelectorAll(".numberButton");
let displayValue
numberButtons.forEach(button => button.addEventListener("click",() => {
    display.value += button.textContent
    displayValue = +display.value
}));

const operate = (operator,num1,num2) => {
    if(operator === "+") return add(num1,num2);
    if(operator === "-") return subtract(num1,num2);
    if(operator === "÷") return divide(num1,num2);
    if(operator === "×") return multiply(num1,num2);
    return "Invalid operator";
}

const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const multiply = (num1,num2) => num1 * num2;

const divide = (num1,num2) => num1 / num2;