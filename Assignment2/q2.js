
const prompt = require("prompt-sync")();
function calculator(num1, num2, operation) {
    let result;

   
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) { 
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid'; 
    }

    return result;
}

let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operation = prompt("Enter the operation (add, subtract, multiply, divide): ");


let output = calculator(num1, num2, operation);

console.log("The result is: " + output);
