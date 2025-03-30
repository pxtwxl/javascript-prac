// can declare in two ways : 
// 1. literal --> from literal multiple instances can be generated
// const obj1 = {}
// 2. constructor --> from constructor a singleton is generated (meaning a single instance)
// Object.create

const mySym = Symbol("key11")

const student = {
    Name : "Anuj",
    uid : 123,
    [mySym] : "1key1", // --> to use a symbol as key in object always have to use [symbol_name]
    "email" : "anuj219@gmail.com",  // can only be used as ["email"]
    section : 710,
    group : 'B',
    dob : "2000-01-19"
}

// console.log(student["Name"]);
// console.log(student.dob);
// console.log(student["email"]);
// console.log(student[mySym]);
// console.log(typeof student[mySym]);


// student["email"] = "anuj12@yahoo.com"
// Object.freeze(student); // this freezes the object -> means no changes can be reflected on the object
// student["email"] = "anuj323@orkut.com"

// console.log(student);

student.greeting = function() {
    console.log("Hello Student");
}

student.greetTwo = function() {
    console.log(`Hello Student, ${this.Name}`);
}

console.log(student.greeting);
console.log(student.greeting());