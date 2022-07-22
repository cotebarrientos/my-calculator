let previousNum = "";
let currentNum = "";
let operator = "";

const previousValue = document.querySelector('.previous-value');
const currentValue = document.querySelector('.current-value');
const operandButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const equalBtn = document.querySelector('.equals');

equalBtn.addEventListener('click', () => {
    // Checking before executing the mathematical operation
    if(currentNum != "" && previousNum != "") {
        operate();
    }
});

const allClearBtn = document.querySelector('.all__clear');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');

operandButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        handleOperand(e.target.textContent);
    });
});

function handleOperand(number) {
    // Prevents the numbers from going off-screen
    if(currentNum.length <= 11){
        currentNum += number;
        currentValue.textContent = currentNum;
        console.log(number);
    }
}

operatorButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousValue.textContent = previousNum + " " + operator;
    currentNum = "";
    currentValue.textContent = "";
}

function operate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === "+"){
        previousNum = previousNum + currentNum;
    } else if(operator === "-"){
        previousNum = previousNum - currentNum;
    } else if(operator === "x"){
        previousNum = previousNum * currentNum;
    } else if(operator === "÷"){
        if(currentNum <= 0) {
            previousNum = `Error! (ง︡'-'︠)ง`;
            displayResults();
            return;
        }
        previousNum = previousNum / currentNum;
    } else if(operator === "%"){
        previousNum = previousNum /100 * currentNum;
    }

    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function displayResults() {
    previousValue.textContent = "";
    operator = "";
    if(previousNum.length <= 11){
        currentValue.textContent = previousNum;
    } else {
        currentValue.textContent = previousNum.slice(0, 16) + "...";
    }
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}
