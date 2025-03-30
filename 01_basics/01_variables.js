const accountName = "Anuj"
let emailId = "xyz@gmail.com"
var accountId = 29292;
accountCity = "Noida"
let accountNumber; // only declaration leads to assign value as "undefined"

// accountName = "sjsjs" // -- cannot change the const variables

/*
Avoid using var for declarations/definitions as
they lead to block scope and functional scope issues
*/

console.table([accountName,emailId,accountId,accountCity,accountNumber]);