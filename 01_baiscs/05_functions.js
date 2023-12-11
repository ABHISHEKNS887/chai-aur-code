// Closure: A closure is the combination of a function bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer 
// function's scope from an inner function.

function one(){
    const b = 4
    function two(){
        const a = 3
        console.log(a+b)
    }
    two()
}

one()

// Hoisting: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration 
// of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. 
// Hoisting is not a term normatively defined in the ECMAScript specification.

addone(4)

const addone = function(a){
    return a + 1
}

// Explicite return - when we use return keyword.
// Implicite - When we not use return keyword. 

// Immidiatly invoked function expression (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or 
// called in the JavaScript event loop. Having a function that behaves that way can be useful in certain situations. 
// IIFEs prevent pollution of the global JS scope.

(function chai(){
    // Named IIFE
    console.log('DB Connected');
})(); // semi colon is needed here. to end the code run.

((name) => {
    // Unnamed IIFE
    console.log(`DB Connected to ${name}`);
})('abhi')

// Falsy values

// flase, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// '0', 'false', ' ', [], {}, function(){}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
