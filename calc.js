// Project - Build a Calculator without eval();

// ** Variables ** //

// -- Display, numbers and operators

const display = document.querySelector('.display');
const upperDisplay = document.querySelector('.upperDisplay');

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const equalBtn = document.querySelector('.equalBtn');

// --Result, operation, steps and Arrays
let result = 0;
let step = 0;
let operation;

let firstArr = [];
let secondArr = [];

let firstOperand;
let secondOperand;

// ** End of Variables ** //

// Two arreys were created to save 1st and 2nd operands.
// The steps: step 0-1, the numbers will be saved in Array1;
// During step 2, the operator will be added;
// After that, the Array2 will be stored the datas;
// In the end, the numbers will be transformed in 'Numbers' and stored in
// operands variables 
numberBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        if(step === 0 || step === 1){
            display.textContent += event.target.textContent;
            firstArr.push(btn.textContent);
            step = 1;
            firstOperand = Number(firstArr.join(''));
        } else if(step === 2){
            display.textContent += event.target.textContent;
            secondArr.push(btn.textContent);
            secondOperand = Number(secondArr.join(''));
        }
    })
})


operatorBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        display.textContent += event.target.textContent;
        step = 2;
        operation = btn.textContent;
    })
})


// Straight do the point: based on the operator, code performs the desired calculation;
// The operands then are transferred to the upperDisplay and the Result will be showed
// in the main display;
// I used a little McGyverism here: when the '=' is clicked, the firstOperand receives
// the result and the secondOperand is reset to receive the next numbers.
equalBtn.addEventListener('click', operate);
let clicked = false;
function operate(){
    if(operation == '+'){
        result = firstOperand + secondOperand;
        upperDisplay.textContent = `${firstOperand} + ${secondOperand}`;
        display.textContent = result;
    } else if(operation == '-'){
        result = firstOperand - secondOperand;
        upperDisplay.textContent = `${firstOperand} - ${secondOperand}`;
        display.textContent = result;
    } else if(operation == 'x'){
        result = firstOperand * secondOperand;
        upperDisplay.textContent = `${firstOperand} x ${secondOperand}`;
        display.textContent = result;
    } else if(operation == '/'){
        result = firstOperand / secondOperand;
        upperDisplay.textContent = `${firstOperand} / ${secondOperand}`;
        display.textContent = result;
    }
    clicked = true;
    if(clicked === true){
        firstOperand = result;
        secondArr = [];
    }
}

clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
    upperDisplay.innerHTML = '';
    firstArr = [];
    secondArr = [];
    firstOperand = null;
    secondOperand = null;
    operation = null;
    result = 0;
    step = 0;
})

deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    firstArr = firstArr.slice(0, -1);
    secondArr = secondArr.slice(0, -1);
})