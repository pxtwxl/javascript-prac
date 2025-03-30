const name = ["anuj","ajay","mahesh","raghu"]
const city = ["delhi","blgr","pune"]

console.log(name);
// name.push(city); // -> this is wrong as it pushes the whole city array into the name array and treating it as an element of array

const newarr = name.concat(city);
console.log(newarr);

const allnew = [...city,...name] // ... -> gives the spreadout elements (every element of origin arr is now new separate element)
console.log(allnew);

const other = [1,2,3,[2,3,4,4,4],1,5,[1,2,3,[3,1]]];
console.log(other.flat(Infinity)); // flat -> spreading out the complex array elements

console.log(Array.isArray("Anuj"));
console.log(Array.from("Anuj"));

console.log(Array.from({name:"anuj"})); // cannot convert the object into an array so returns empty array []

let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1,n2,n3));