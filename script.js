function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 !== 0 ? num1 / num2 : "Error";
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);
  }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

function updateDisplay(value) {
  if (shouldResetDisplay) {
    display.textContent = "";
    shouldResetDisplay = false;
  }
  display.textContent += value;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      if (!operator) {
        firstNumber += value;
      } else {
        secondNumber += value;
      }
      updateDisplay(value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      updateDisplay(" " + value + " ");
    } else if (value === "=") {
      if (firstNumber && operator && secondNumber) {
        let result;
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        result = operate(operator, num1, num2);

        display.textContent = result;
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
        shouldResetDisplay = true;
      } else if (value === "C") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        display.textContent = "";
      }
    }
  });
});
