const accountId = 144553
let accountEmail = "test1234@google.com"
var accountPassword = "12345"
accountCity = "Rajkot"
let accountState;

// accountId = 2 // not allowed


accountEmail = "test12345@hc.com"
accountPassword = "678"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])