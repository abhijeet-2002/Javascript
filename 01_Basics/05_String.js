const name = "Abhijeet"
const repoCount = 8

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abhijeet-ak-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Abhijeet   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Abhijeet.com/Abhijeet%08kumar"

console.log(url.replace('%08', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));