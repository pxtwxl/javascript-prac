// for of

// ["","","",""]
// [{},{},{},{}]

let arr = [1,2,3,4,5]

// for (const iterator of arr) {
//     console.log(iterator);
// }

// Maps

const myMap = new Map();
myMap.set("IN","India")
myMap.set("USA","United States of America")
myMap.set("CN","China")
myMap.set("KR","Korea")


// for (const [key,value] of myMap) {
//     console.log(`${key} --> ${value}`);
// }

// forIn loop
// used for iterations in the object

const myObj = {
    game1 : "nfs",
    game2 : "gta",
    game3 : "ac"
}

// for (const [key,value] of myObj) {        // gives error as objects are not iterable in this format
//     console.log(`${key} --> ${value}`);
// }

for (const key in myObj) {
    console.log(`${key} --> ${myObj[key]}`);
    // console.log(key);
}

const progg = ["java","cpp","c","ruby","swift"]

// for (const key in progg) {
//     console.log(progg[key]);
// }

// progg.forEach( function (val) {
//     console.log(val);
// })

// progg.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// progg.forEach(printMe);

// progg.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "c++",
        langFileName : "cpp"
    },
    {
        langName : "java",
        langFileName : "java"
    }
]

myCoding.forEach((item) => {         // forEach does not return any value
    console.log(`${item.langName} -> ${item.langFileName}`);
})

