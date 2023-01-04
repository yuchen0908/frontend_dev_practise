/************************************************************
 * topic 12 - introduce private properties and methods
*/


function Circle(radius) {

    // we can exploit "let" scope, and define defaultLocation as a variable within the function / constructor
    // in this way, we set the private properties, inaccessible from the outside.
    let defaultLocation = {x:0, y:0};
    // we can do the same thing to computeOptimumLocation as private method.
    let computeOptimumLocation = function(factor) {
        //
    }

    this.radius = radius;
    this.draw = function() {

        // we can access computeOptimumLocation because of the terms JS's closures 
        //      * a closure is a function that references variables in the outer scope from its inner scope.
        //      * The closure preserves the outer scope inside its inner scope.
        // ref: https://www.javascripttutorial.net/javascript-closure/
        computeOptimumLocation(0.1);    
        // defaultLocation
        console.log('draw');
    };
}

const circle = new Circle(10);
// we will see undefined because we actually set the defaultLocation as circle's property without assigning a value. 
// it's no longer the same thing as our private property.
console.log(circle.defaultLocation);    
console.log(circle.radius);
