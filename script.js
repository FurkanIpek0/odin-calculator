let lastOperator = null;

let firstNumber = null;

let lastNumber = null;

function numberChanger(newNumber) {
    lastNumber = firstNumber;
    firstNumber = newNumber;
}

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 * num2;
}

function operate(operation) {
    const a = lastNumber;
    const b = firstNumber;
    if (lastOperator !== null) {
        switch (lastOperator) {
            case '+':
                lastOperator = operation;
                return sum(a, b);
                break;
            case '-':
                lastOperator = operation;
                return subtract(a, b);
                break;
            case '*':
                lastOperator = operation;
                return multiply(a, b);
                break;
            case '/':
                lastOperator = operation;
                return divide(a, b);
                break;
        }
    }
}