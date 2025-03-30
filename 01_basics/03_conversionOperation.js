let inum = 33

console.log(typeof inum)
console.log(inum)

let stringnum = String(inum)
console.log(typeof stringnum)
console.log(stringnum)

stringnum = undefined
console.log(typeof stringnum)
console.log(stringnum)


let snum = Number(stringnum)
console.log(typeof snum)
console.log(snum)

// "33" -> 33
// "33were" -> NaN
// true -> 1 , false -> 0

// 1 -> true , 0 -> false
// "" -> false , "xrts" -> true