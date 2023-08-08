const num1 = {
    value: 0,
    wasClick: false
}
const num2 = {
    value: 0,
    wasClick: false
}
const answer = {
    value: 0,
    wasAnswered: false
}
let index = 0;
let operator = "";
let wasClick = false;
let array = [];

function add (number1, number2) {
    let result = number1 + number2;
    return result
}

function substract (number1, number2) {
    let result = number1 - number2;
    return result
}
function multiply (number1, number2) {
    let result = number1 * number2;
    return result
}
function divide (number1, number2) {
    let result = number1 / number2;
    return result
}

function operate(num1,num2,operator){
    let result = 0;
    switch(operator){
        case "+": result = add(num1,num2); break;
        case "-": result = substract(num1,num2); break;
        case "*": result = multiply(num1,num2); break;
        case "/": result = divide(num1,num2); break;
    }
    return result;
}


const bottomDisplayer = document.querySelector("#bottom-displayer");
const upperDisplayer = document.querySelector("#upper-displayer");

const buttons = document.querySelectorAll(".numbers");

buttons.forEach((button) => button.addEventListener("click", () => {
    array.push(button.innerHTML);
    if(num1.wasClick === false){
        num1.value = Number(array[index]);
        index++;
        num1.wasClick = true;
        bottomDisplayer.append(`${num1.value}`);
    }
    else {
        num2.value = Number(array[index]);
        operator = array[index-1];
        answer.value = operate(num1.value,num2.value,operator);
        num1.value = answer.value;
        bottomDisplayer.append(`${num2.value}`);
        index++;
    }
    console.log(num1.value);
    console.log(num2.value);
    console.log(array);
}));

const signButtons = document.querySelectorAll(".sign");

signButtons.forEach((button) => button.addEventListener("click", () => {
    if(num1.wasClick === true && wasClick === false){
        array.push(button.innerHTML);
        bottomDisplayer.append(` ${button.innerHTML} `);
        index++;
        if(answer.wasAnswered === true){
            upperDisplayer.innerHTML = `Ans = ${answer.value}`
        }
    }
    console.log(array);
}))

const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    if(operator === "/" && num2.value === 0){
        alert("You cant divide by 0");
        clearAll();
        return;
    }
    bottomDisplayer.append(" = ");
    upperDisplayer.innerHTML = bottomDisplayer.innerHTML;
    bottomDisplayer.innerHTML = "";
    bottomDisplayer.append(`${answer.value}`);
    answer.wasAnswered = true;
})

function clearAll(){
    num1.value = 0;
    num1.wasClick = false;
    num2.value = 0;
    num2.wasClick = false;
    answer.value = 0;
    answer.wasAnswered = false;
    index = 0;
    wasClick = false;
    operator = "";
    array = [];
    upperDisplayer.innerHTML = "";
    bottomDisplayer.innerHTML = "";
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => clearAll());
