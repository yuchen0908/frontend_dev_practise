/******************************************
 * Topic arrow function and this
 * Following from previous topic ./s05-arrow.js, the problem with Arrow function is that
 * they don't rebind "this" keyword.
 */

// s01 - we know person1.talk()'s this binds to person1 object. 
const person1 = {
    talk() {console.log('this', this);}
}
person1.talk()

// s02 - callback function not linked to "this" object
// setTimeout(callback function, milliseconds), calls a function after a number of milliseconds.
// person2's talk methods call the callback function after 1 sec
// however the result shows that this binds to window Object. This is because call-back function is not binding to any Object, it's a standalone function.
const person2 = {
    talk() {
        setTimeout(function() {
            console.log('this', this);
        }, 1000); //a millisecond

    }
}

person2.talk();

// s03 - how to address the problem we encountered from s02
// by creating a self variable which binds to this under the talk(). 
const person3 = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log('self', self);
        }, 1000); //a millisecond

    }
}
person3.talk();

// s04 - instead we can use arrow function, and the benefit is that
//      * arrow function INHERIT "this" 
//      * () means no argument
const person4 = {
    name: 'hello',
    // this is inherited from person4
    talk() {setTimeout(() => console.log('this', this), 1000);}
}
person4.talk();
