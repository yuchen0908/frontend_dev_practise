/******************************************
 * Topic Object
 *      when we define a variable, it should only be accessible from the block where it is defined. 
 *      however, when var is declared in a function, it can be accessible from anywhere in the function where it is defined.
 */

const person = {
    name: 'Mosh',
    
    // traditional way of defining method in an Object
    walk: function() {console.log('walk');},

    // under ES6, we can drop colon ":" and keyword "function", and define it in a more concise way.
    talk() {console.log('talk');} 
};


// dot-notation to access methods
person.walk();
// bracket-notation to access methods
person["talk"]();
