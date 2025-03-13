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

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "jitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***************************************************
// Stack (primitive), heap (non-primitive)

let myYoutubename = "gulamjilaneedotcom"

let anothername = myYoutubename
anothername = "jilanee"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.comm",
    upi: "user@ybl"
}

let userTWo = userOne

userTWo.email = "jilanee@google.com"

console.log(userOne.email);
console.log(userTWo.email);