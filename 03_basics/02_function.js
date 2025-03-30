function calculatePrice(val1,val2,...num1) { // -> ... is called both rest/spread operator based on use case
    console.log(val1);
    console.log(val2);
    return num1
} // here it is used as an rest operator
// here rest operator bundles the spreaded out data and make it an array of spreaded out data
console.log(calculatePrice(100,200,300,400,2000));

const student = {
    username : "Anuj",
    id : 2341,
    age : 22
}

function studentManage(anyObject) {
    return `${anyObject.username} is logged in system with id : ${anyObject.id} with age : ${anyObject.age}`
}

console.log(studentManage(student))

const arr = [100,200,300,400,500,600]

function handleArray(array) {
    return array[1];
}

console.log(handleArray(arr));