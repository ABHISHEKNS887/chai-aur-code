const accountID = '12345'
let accountName = 'abhishek'
var accountPassword = '12312312'
accountEmail = 'adsa@gmail.com'
let accountState;

/*
Prefer not to use var
Because of issue in block scope and functional scope.
*/
console.table([accountID, accountName, accountPassword, accountEmail ,accountState])