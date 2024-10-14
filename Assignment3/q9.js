function countWords(paragraph) {
    
    if (paragraph.trim() === '') {
        return 0;
    }

    
    const words = paragraph.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}


let paragraph = "This is a sample paragraph. It contains several words.";
let wordCount = countWords(paragraph);
console.log(wordCount); 
