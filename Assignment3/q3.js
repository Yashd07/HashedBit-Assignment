let string = 'INDIA';


let charArray = string.split('');


charArray.splice(3, 0, 'O', 'N', 'E', 'S');


let newString = charArray.join('');

console.log(newString);
