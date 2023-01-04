/************************************************************
 * topic 11 - Abstraction
 * in OOP, we should HIDE the details, and SHOW the essentials
 * In this scenario, when calling the Circle, we shouldn't access 
 *      internal function such as computeOptimumLocaiton() 
 *      and internal state like defaultLocation
 * 
*/

// here's a demonstration of a bad example
// no differentiation between internal property and methods, and external ones.
function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x:0, y:0};

    this.computeOptimumLocation = function(factor) {
        //
    }

    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle = new Circle(10);
