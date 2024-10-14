function correctFn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}

// Example usage
let sentence = "The weather in India is not the same as in INDIA.";
let wrongWord = "INDIA";
let correctWord = "Indonesia";

let correctedSentence = correctFn(sentence, wrongWord, correctWord);
console.log(correctedSentence);
