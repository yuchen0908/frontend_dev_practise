/************************************************************
 * topic 5 - explain constructor properties
 * we introduce constructor property to find the function
 * that used to define the Class / Object
 * 
 * the key takeaway is
 * Each Object has a construcutor property, and it's used to create the object.
*/

// s1 - via factory function
function createCircle (radius) {

    return {
        radius,
        draw: function () {
            console.log(`draw ${this.radius}`);
        }
    };
}

const circle = createCircle(1);
console.log("print circle's constructor: ");
// we would see the following output:
// [Function: Object]
// it's a function via built-in constructor to build Object.
console.log(circle.constructor);

// s2 - via factory function
function Circle(radius) {

    this.radius = radius;
    this.draw = function() {
        console.log(`draw ${this.radius}`);
    };

}

const another = new Circle(10);
console.log("print another's constructor: ");
// we would see the following output:
// [Function: Circle]
// it's using the Constructor Circle which is defined by us.
console.log(another.constructor);

// s3 - to create our Object function
console.log("print x's constructor: ");
let x = {};
// it equaivalent to 
// let x = new Object();
console.log(x.constructor);

// s4 - each primitive has it's own constructor function
console.log("print String constructor: ")
let p = new String();                       // however, we often use p = ''
console.log(p.constructor);
console.log("print Number constructor: ")
let q = new Number();                       // however, we often use q = 1,2,3..
console.log(q.constructor);
console.log("print Boolean constructor: ")
let b = new Boolean();                      // however, we often use b = true, false..
console.log(b.constructor);
