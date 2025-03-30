const userAccount = new Object();

// console.log(userAccount);

userAccount.id = 12012;
userAccount.name = "Anuj";
userAccount.isLoggedIn = false;

// console.log(userAccount);

const regularAccount = {
    email : "xyz@gmail.com",
    username : {
        userId : "23sf1",
        fullname : {
            firstname : "ANUJ",
            secondname : "PATWAL",
        }
    }
}

// console.log(regularAccount.username.fullname);

const o1 = {1:"a",2:"b"}
const o2 = {3:"c",4:"d"}

const o3 = Object.assign(o1,o2);
// const o3 = Object.assign({},o1,o2); // {} (target) -> optional parameter but to guarantee that all objects key-values are added into the object
const o4  = {...o1,...o2} // ... -> spread operator

// console.log(o3);

const course = {
    coursename : "js tutorials",
    price : 9181,
    instructorname : "anuj patwal"
}

// destructuring

const {instructorname : instructor} = course

// console.log(instructorname);
console.log(instructor);

