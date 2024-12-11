const accountId = 1233344
let accountEmail = "prasannarudra@gmail.com"
var accountPassword = "112233"
accountCity = "Delhi"
// accountId = 2333 // not allowed due to value being constant
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])