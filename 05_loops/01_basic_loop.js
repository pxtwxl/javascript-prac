
// for (let index = 1; index <= 10; index++) {
//     const element = index*10;

//     console.log(element + " ");
// }


let myArr = ["batman","homelander","alphaboy"]

// for (let index = 0; index < myArr.length + 2; index++) {  // when index goes out of bound , it returns undefined
//     const element = myArr[index];
//     console.log(element + " ");
// }

let arr = 0;

while(arr < myArr.length) {
    console.log(myArr[arr++] + " ");
}

let ind = 1;

do {
    console.log(ind++);
} while(ind <= 10)