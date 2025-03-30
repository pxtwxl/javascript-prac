// stack(primitive) heap(non-primitive)

// stack -> {copy of the data}
// heap -> {reference of the data}

let emailId = "xuz@gmal.com"
let mail = emailId  // as it is in stack memory it only returns the copy of the data

mail = "cvb@gmail"

console.log(emailId)
console.log(mail)

let user1 = {
    email : "user1@gmail",
    age : 22
};

console.log("user 1 email : "+ user1.email)
console.log("user 1 age : "+ user1.age)

let user2 = user1;  // it is in heap memory so it returns the reference of the data , changes happen in both the objects data

user2.email = "user2@gmail"
user2.age = 14

console.log("user 1 email : "+ user1.email)
console.log("user 1 age : "+ user1.age)

console.log("user 2 email : "+ user2.email)
console.log("user 2 age : "+ user2.age)