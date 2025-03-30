const myArr = [0,1,2,3,4,5]
const names = ["axf","wffs","wewewe"]

console.log(names);

const newArr = new Array(0,1,2,2);
console.log(newArr);

myArr.push(23);
myArr.push(534);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(8282);
console.log(myArr);
myArr.shift();
console.log(myArr);

const ar1 = myArr.join();
console.log(ar1 + typeof ar1);


console.log("Orig : "+myArr);

const min1 = myArr.slice(1,3);
console.log("Slice "+min1);
console.log("A "+myArr);

const min2 = myArr.splice(1,3);
console.log("Splice "+min2);
console.log("B "+myArr);