/******************************************
 * Topic Class
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
 */

// for the code example as below:
//      * the major problem is that if we have a handful of methods defined
//      * we want a way to update those methods and without copying them to each instance.
//      * the BEST WAY is to create a class (like how we do in Python)
const person = {name: 'Yu', walk() {
    console.log('walk');
}};

// recall Constructor we used in OOP part
// we can refer to ./javascript/js-02-oop/s04_constructor.js
//      * essentially, class splits properties and methods
//      * properties are defined within constructor()
//      * methods are defined next to constructor().
class Person {

    constructor(name) {
        this.name = name;
    } 
    walk() {console.log('walk along');}
}

const person2 = new Person('Yu')
console.log(person2);
person2.walk();
