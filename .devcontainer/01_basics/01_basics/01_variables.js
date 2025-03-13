const accountId = 144553
let accountEmail = "jilalnee@gmail.com"
var accountpassword = "12345"
accountatCity = "jaleshwar"
let accountState;

// accountId = 2 // not allowed

accountEmail = "gulam123"
accountpassword = "21212121"
accountatCity = "Bangaluru"

console.log(accountId);
console.log(accountEmail)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountpassword, accountatCity, accountState])