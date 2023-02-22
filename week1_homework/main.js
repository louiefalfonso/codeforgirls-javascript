// initialize array
var letters = "abcdefghijklmnopqrstuvwxyz";

// use indexing and slicing
let newstring1 = letters.slice(7,9);
let newstring2 = letters.slice(3,6);
let newstring3 = letters.slice(13,16) + letters.slice(4,5);

// display in console
console.log(newstring1);
console.log(newstring2);
console.log(newstring3);

//display in html
document.write("output: " + newstring1 + " , " + newstring2 + " , " + newstring3);
