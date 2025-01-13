const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Global Variables
let currentNumber = "";
let prevNumber = "";
let operator = null;

function updateDisplay() {
    display.value = currentNumber || prevNumber ;
}

function appendData(num) {
    currentNumber += num;
    updateDisplay();
}

function selectOperator(ope) {
    if (currentNumber === "") return;

    prevNumber = currentNumber;
    operator = ope;
    currentNumber = "";
    updateDisplay();
}

function calculate() {
    if (currentNumber === "" || prevNumber === "") return;

    let prev = parseFloat(prevNumber);
    let curr = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    prevNumber = "";
    operator = null;
    updateDisplay();
}

function clearFun() {
    currentNumber = "";
    prevNumber = "";
    operator = null;
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (!isNaN(value) || value === ".") {
            appendData(value);
        } else if (value === "=") {
            calculate();
        } else if (value === "AC") {
            clearFun();
        } else {
            selectOperator(value);
        }
    });
});