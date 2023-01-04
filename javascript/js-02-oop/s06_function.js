/************************************************************
 * topic 6 - explain functions
 * functions are Objects. Hence, we can use the same method to create function as s04 and s05 use.

*/

// s1 - Circle is an Object
function Circle(radius) {           // Circle is an Object defined by keyword function.

    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };

}

console.log("Let's explore the properties and methods of the Object Circle");
console.log(Circle.name);           // returns the name of the function
console.log(Circle.length);         // returns the number of arguments
// we know that every Object has a constructor property
console.log(Circle.constructor);    // we can see that it's created by Function Constructor


// s2 - we can use Function() syntax to create Circle()
// Syntax of Function
//      Function(arg1, arg2, .. argN, functionBody), in which it accepts unlimited number of arguments, however, functionBody has to be string
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
`);
console.log(Circle1.constructor);
const circle = new Circle1(10);
console.log(circle.radius);
circle.draw();

// Question Mark here given line 46 error
// s3 - deep dive into function Object and check methods
// there're three methods associated to Function()
//      * call Syntax - call(thisArg, arg1, arg2, ...), and return an instantiated Object. 
//      * apply Syntax - apply(thisArg, [arg1, arg2, ...]) and return an instantiated Object.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
const another = Circle1.call({}, 1);
another.draw();
