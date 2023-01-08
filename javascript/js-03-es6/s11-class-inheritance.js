/******************************************
 * Topic Class Inheritance
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
 */

// define Person class
class Person {

    constructor(name) {
        this.name = name;
    } 
    walk() {console.log('walk along');}
}

// we further define based on Person
// and Teacher inherits from Person, a child from parent
// reference of super(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class Teacher extends Person {
    constructor (name, degree) {
        // super, is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        // here, we use super() to call the parent constructor.

        // In the constructor body of a derived class (with extends), the super keyword may appear as a "function call" (super(...args)), which must be called before the this keyword is used, and before the constructor returns. It calls the parent class's constructor and binds the parent class's public fields, after which the derived class's constructor can further access and modify this.
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher("Yu", "master of science");
teacher.teach();
console.log(teacher.degree);
