/************************************************************
 * topic 4 - explain constructor
 * definition: a constructor function is to define a custom type and the "new" operator to create multiple objects from this type
 *      Technically speaking, a constructor function is a regular function with the following convention:
 *      The name of a constructor function starts with a Capital letter like Person, Document, etc.
 *      A constructor function should be called only with the "new" operator.
 *      Note that ES6 introduces the class keyword that allows you to define a custom type. And classes are just syntactic sugar over the constructor functions with some enhancements.
 * reference 1 - constrcutor function: https://www.javascripttutorial.net/javascript-constructor-function/
 * reference 2 - new keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
*/

// if "new" is used before applying the function, it has done three things as below:
// s1 - create an empty object
// s2 - then assigning properties and methods to "this" object
// s3 - and eventually return "this" object.
// without "new", Circle acts like normal function, and radius and draw bind to global "this"
function Circle(radius) {

    // a reference to the object that created
    // this = {}; 

    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log(`draw ${this.radius}`);
    };

    // return this;

}

// "new" create a new object. if without "new", object refers to global object.
// in browser context, global "this" refers to window function 
const another = new Circle(10);
another.draw();
