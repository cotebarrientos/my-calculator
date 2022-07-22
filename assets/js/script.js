let previousNum = "";
let currentNum = "";
let operator = "";

const previousValue = document.querySelector('.previous-value');
const currentValue = document.querySelector('.current-value');
const operandButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
const allClear = document.querySelector('.all__clear');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

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