/******************************************
 * Topic "this" keyword
 *      this always return a reference to the current Object
 */

const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    } //this returns "person" Object, which we have defined.
};


// dot-notation to access methods
person.walk();


const walk = person.walk;   // not calling the walk() methods but walk itself
console.log(walk);          // we actually print out the function body of walk. Recall from ./javascript/js-02-oop/s06_function.js

// we are calling a function outside of an Object
//      walk now is a copy of the funtion body where we defined in the Object person
//      when calling the function, we're calling the function body. 
//      however, "this" is now attached to window Object in browser
walk();                     
