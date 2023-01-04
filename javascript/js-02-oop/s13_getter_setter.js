/************************************************************
 * topic 13 - getter and setter
*/

function Circle(radius) {

    let defaultLocation = {x:0, y:0};
    this.getDefaultLocation = function () {
        return defaultLocation;
    };
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
    
    // we can use defineProperty to write getter and setter for a interval property either to define or modify. 
    // Object.defineProperty(obj, prop, descriptor), 
    //      obj is the object on which to define the property
    //      prop is the name of the property to be defined or modified
    //      descriptor of the proerpty being defined or modified
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    Object.defineProperty(this, 'defaultLocation'
        , {
            get: function() { return defaultLocation; },
            set: function(value) {
                if (!value.x || !value.y) throw new Error('Invalid location.'); 
                defaultLocation = value; 
            }
        })
}

const circle = new Circle(10);
circle.defaultLocation = 1;
console.log(circle);
