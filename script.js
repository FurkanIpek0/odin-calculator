let lastOperator = null;
let numberOnBoardText = '';
let numberOnBoard = null;
let lastNumber = null;

const buttonContainer = document.querySelector('#button-display');

buttonContainer.addEventListener('click', (event) => {
    const eventButton = event.target;

    if (eventButton.classList.contains('number')) {
        numberOnBoardText += eventButton.id;
        numberOnBoard = parseFloat(numberOnBoardText);
        writeBoard(numberOnBoardText);
    } else if (eventButton.classList.contains('operator')) {
        if (lastOperator !== null) {
            const result = operate(lastOperator);
            writeBoard(result);
            lastNumber = result;
        } else {
            lastNumber = numberOnBoard;
        }
        lastOperator = eventButton.id;
        numberOnBoardText = '';
    } else if (eventButton.classList.contains('equals')) {
        if (lastOperator !== null) {
            const result = operate(lastOperator);
            writeBoard(result);
            lastNumber = result;
            numberOnBoard = null;
            lastOperator = null;
            numberOnBoardText = '';
        }
    }
});

function writeBoard(text) {
    const board = document.querySelector('#number-board');
    board.textContent = text;
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
    if (num2 === 0) {
        return "Hata! 0'a bölünemez";
    }
    return num1 / num2;
}

function operate(operation) {
    const a = lastNumber;
    const b = numberOnBoard;

    if (operation) {
        switch (operation) {
            case '+':
                return sum(a, b);
            case '-':
                return subtract(a, b);
            case '*':
                return multiply(a, b);
            case '/':
                return divide(a, b);
            default:
                return 0;
        }
    }
    return 0;
}
