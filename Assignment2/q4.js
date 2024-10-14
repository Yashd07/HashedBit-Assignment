const prompt = require("prompt-sync")();
function sumOfProducts(a, b) {
    const s1 = a.toString().padStart(Math.max(a.toString().length, b.toString().length), '0');
    const s2 = b.toString().padStart(Math.max(a.toString().length, b.toString().length), '0');

    let sum = 0;

    for (let i = 0; i < s1.length; i++) {
        sum += parseInt(s1[i]) * parseInt(s2[i]);
    }

    return sum;
}

const n1 = parseInt(prompt("Enter the first number: "));
const n2 = parseInt(prompt("Enter the second number: "));
console.log("The sum of products is: " + sumOfProducts(n1, n2));
