let nowDate = new Date();
console.log(nowDate);
console.log(nowDate.toString());
console.log(nowDate.toDateString());
console.log(nowDate.toTimeString());

let createDate = new Date(2025,11,31)
console.log(createDate.toDateString());

let difformat = new Date("2025-03-21")
console.log(difformat.toDateString());

let timestamp = Date.now();
console.log(timestamp); // gives time in miliseconds to convert to seconds divide by 1000

let today = new Date();
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());