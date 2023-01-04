/************************************************************
 * topic 2 - explain object
 * Key takeaways are
 * when defining an object, we can include both properties and methods
 *      properties are variables to store values
 *      methods are functions to store logics
*/

const circle = {
    // called properties if it's variable within an object
    radius: 1,
    location: {
        x: 1, 
        y: 1
    }, 
    // called methods if it's a function within an object 
    draw: function() {
        console.log('draw');
    }
};

circle.draw();
