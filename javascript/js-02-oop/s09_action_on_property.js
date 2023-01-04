/************************************************************
 * topic 9 - add or remove properties
 * JS allows to add properties or remove anytime we want
 * Not like other programming languages that we have to do it in the class - compare with Python.
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

// adding location property by dot notation
const circle = new Circle(10);
circle.location = {x:1, y:1};
console.log(circle);

// adding location property by bracket notation
const another = new Circle(15);
another['location'] = {x:1, y:1};
console.log(another);

// we can also remove properties via either dot notation or bracket notation
delete circle.location;
console.log(circle);
delete another['location'];
console.log(another);
