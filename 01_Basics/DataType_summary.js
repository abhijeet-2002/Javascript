//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Monu", "Abhay", "Kundan"];
let myObj = {
    name: "Abhijeet",
    age: 20,
}

const myFunction = function(){
    console.log("Hello Abhijeet");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//stack(primitive),Heap (Non-Primitive)
let myName ="Abhijeet Kumar"
let anothername =myName
anothername ="Bikku"
console.log(myName);
console.log(anothername);

let user1 ={
    email : "abhi@google.com",
    upi :"abhi@ybl"
}
let user2 = user1
 
user2.email="abhijeet@google.com"
console.log(user2.email);
console.log(user1.email)