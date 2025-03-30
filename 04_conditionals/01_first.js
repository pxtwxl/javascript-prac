if(3>2) {
    console.log("entered if block");
}
else {
    console.log("entered else block");
}

// > , < , >= , <= , == , !=
// || , && , ^ 

//  ++++++++++++++++++++ Switch ++++++++++++++++++++

let month = "Feb"

switch (month) {
    case "Jan" :
        console.log("Janauary");
        break;
    case "Feb" :
        console.log("February");
        break;
    case "Mar" :
        console.log("March");
        break;
    case "Apr" :
        console.log("April");
        break;
    case "May" :
        console.log("May");
        break;
    case "Jun" :
        console.log("June");
        break;

    default : 
        console.log("default case");
        break;
}

// Falsy Values
// false , 0 , -0 , On (in case of BigInt) , "" , null , undefined , NaN

// truthy Values
// "0" , 'false'," ",[],{}, function(){}

// Null Coalescing Operator (??) : null undefined

let val1,val2,val3;
val1 = null ?? 10;
val2 = undefined ?? 10;
val3 = null ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);

// usually used with some complex functions to fetch values from data , if not successful then set to null


// Ternary operator
// condition ? true case : false case ;

let ret = 3 > 4 ? "true case" : "false case" ;

console.log(ret);