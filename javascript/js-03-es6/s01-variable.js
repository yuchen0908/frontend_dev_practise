/******************************************
 * Topic Variable - Var, Let and Const
 *      when we define a variable, it should only be accessible from the block where it is defined. 
 *      however, when var is declared in a function, it can be accessible from anywhere in the function where it is defined.
 */

let caseNum = 3;

function sayHello() {
    for (var i = 0; i<5; i++) {
        console.log(i);
    }
    // i is still accessible outside the loop, which is 5
    // when a variable is defined by var, it has a scope issue 
    console.log(i); 
}

// var keyword
if (caseNum == 1) {
    sayHello();
}


// ES6 introduces block scope, and "let" and "const"
// A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and contains a list of zero or more statements and declarations.
function sayHello2() {
    for (let i = 0; i<5; i++) {
        console.log(i);
    }
    // when we try to access i, there will be an error
    // it means i is not defined because it is only accessible from the block where it's defined. 
    console.log(i); 
}

// var keyword
if (caseNum == 2) {
    sayHello2();
}


// const cannot be re-assigned, the key difference between const and let
if (caseNum == 3) {

    const x = 1;
    x = 2;

}
