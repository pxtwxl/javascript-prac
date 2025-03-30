const user = {
    username : "Anuj",
    fee : 999,

    welcomeUser : function() {
        console.log(`${this.username}, welcome to the site`);
        console.log(this);
    }
}

// user.welcomeUser()
// user.username = "luke"
// user.welcomeUser()

// console.log(this); // it returns {} , as for browser the global object is window so in browser it returns the window object

// function fof() {
//     console.log(this); // this contains the node environment data like global values , microtasks , structuredclones , etc...
// }

// fof()

// -------------------------- Arrow Functions ++++ --------------------------

// const fof = () => {
//     console.log(this);
// }

// fof()

// explicit return
// const addTwo = (n1,n2) => {
//     return n1+n2;
// }

// console.log(addTwo(2,3))

// implicit return
// const addTwo = (n1,n2) => n1+n2 // this syntax is also right it ensures that "n1+n2" is returned

const retObjFunction = () => (
    {
        username: "anuj",
        id : "212ss1",
        age : 22
    }
)

console.log(retObjFunction())
