let str = "This is an example string for counting vowels and consonants";

let s = str.toLowerCase();

let vCount = 0;
let cCount = 0;

const v = new Set(['a', 'e', 'i', 'o', 'u']);

for (let ch of s) {
    if (v.has(ch)) {
        vCount++;
    } else if (/[a-z]/.test(ch)) {
        cCount++;
    }
}

console.log(`Vowels: ${vCount}`);
console.log(`Consonants: ${cCount}`);
