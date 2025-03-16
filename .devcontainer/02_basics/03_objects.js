// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Jilanee",
    "full name": "Gulam Jilanee",
    [mySym]: "mykey1",
    age: 21,
    location: "Haryana",
    email: "jilanee@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "jilanee@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "jilanee@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());