const num1 = {
    value: 0,
    wasClick: false
}
const num2 = {
    value: 0,
    wasClick: false
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


const buttons = document.querySelectorAll(".numbers");

buttons.forEach((button) => button.addEventListener("click", () => {
    array.push(button.innerHTML);
    if(num1.wasClick === false){
        num1.value = Number(array[index]);
        index++;
        num1.wasClick = true;
    }
    else {
        num2.value = Number(array[index]);
        operator = array[index-1];
        let tempResult = operate(num1.value,num2.value,operator)
        array.push(tempResult);
        num1.value = tempResult;
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
        index++;
    }
    console.log(array);
}))
console.log(add(2,4));
console.log(substract(6,1));
console.log(multiply(4,6));
console.log(divide(9,3));
console.log(operate(12,2,"+"));
