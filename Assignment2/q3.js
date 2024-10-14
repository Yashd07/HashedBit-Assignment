
const prompt = require("prompt-sync")();
function findTax(s) {
    let t;

    switch (true) {
        case (s > 1500000):
            t = 30;
            break;
        case (s > 1000000 && s <= 1500000):
            t = 20;
            break;
        case (s > 500000 && s <= 1000000):
            t = 10;
            break;
        case (s > 0  && s <= 500000):
            t = 0;
            break;
        default:
            return "Invalid salary";
    }

    const ta = s*t/100;
    return `The tax on a salary of ₹${s} is ₹${ta.toFixed(2)} at a rate of ${t}%.`;
}

const salary = parseFloat(prompt("Enter your salary: "));
console.log(findTax(salary));
