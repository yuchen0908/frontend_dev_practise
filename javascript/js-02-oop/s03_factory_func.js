/************************************************************
 * topic 3 - explain factory function patterns
 * A factory function is any function which is not a class or constructor that returns a (presumably new) object. 
 * In JavaScript, any function can return an object. When it does so without the "new" keyword, it’s a factory function.
 * State the problem: 
 *      From s02_object.js, we have created a circle object with fixed location and radius
 *      If we want to create multiple circles, we have to replicate the method.
 *      What if the methods have logic issue, and we have to change each one of the replications.
 * If the object has one or more methods, we say the object has behaviours. 
 * Our solution is to use factory function - return a new object where methods are associated to the keys. 
 *      The benefit of doing so is to only fix the methods under the factory function.
*/

function createCircle (radius) {

    return {
        radius,  // we suppose to write radius: radius. However in ES6, if the key and value pairs are the same, we can remove the value.

        // remember that function is also an object. 
        // hence, we assign a "function" object to key "draw".
        // when using the dot notation, we essentially call the function saved at "draw" 
        draw: function () {
            console.log(`draw ${this.radius}`);
        }
    };
}

const circle = createCircle(1);
circle.draw();
