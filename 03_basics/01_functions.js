function sayHello() {
    console.log("Hello User");
}

// sayHello() // without () -> it is just a reference , with () -> it is a function call

// function addTwo(num1,num2) {
//     console.log(num1+num2);
// }

// addTwo(3,5)
// addTwo(3,"a")
// addTwo(3,null)

// function addTwo(num1,num2) {
//     return num1+num2;
// }

// const result = addTwo(3,4);

// console.log(result);

function loginUser(username) {
    if(username == undefined) {
        console.log("enter a username !!!");
        return
    }

    return `${username} has logged in successfully`
}

console.log(loginUser("Anuj"));
console.log(loginUser());