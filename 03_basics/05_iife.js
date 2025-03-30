// Immediately Invoked Function Expression

(
    function helloWorld() {
        console.log("Hello World!!");
    }
)(); // while calling immediately another iife ensure to end the scope of first iife function

(
    (name) => {
        console.log("Bye World!!");
        console.log(`${name}`);
    }
)("Anuj")

/*
    ( ----> this parenthesis pair is for declaring the function inside it

    )() ----> this parenthesis pair is to call the function immediately 

*/