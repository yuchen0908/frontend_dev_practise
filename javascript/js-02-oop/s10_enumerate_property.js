/************************************************************
 * topic 10 - enumerate property
 * We want to iterate the properties from an Object.
*/

function Circle(radius, location, colour) {
    this.radius = radius;
    this.location = location;
    this.colour = colour;
    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(15, {x:1, y:1}, 'red');

// s1 - iterate all the properties and methods, and associated values.
console.log("Get all properties and methods");
for (let key in circle) {
    console.log(key, circle[key]);
}

// s2 - iterate all the properties but ignore functions.
console.log("Get properties and ignore methods");
for (let key in circle) {
    if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}

// s3 - get all the keys and values a different approach
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
console.log("Get all keys alone");
const keys = Object.keys(circle);
console.log(keys);

// s4 - to check if a Object has a property we can use the following:
console.log("Check whether a key in the Object");
if ('radius' in circle){
    console.log('Circle has a radius.');
}
