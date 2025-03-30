
if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c); // -> var declared can still be accessed as it is having scope issues

console.log(addOne(3));

function addOne(num1) {
    return num+1;
}


// console.log(addTwo(4)); // -> gives error as here function was initialized by holding it in a variable
const addTwo = function(num) {
    return num+2;
}