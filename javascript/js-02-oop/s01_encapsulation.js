/************************************************************
 * topic 1 - OOP's encapsulation concept
 * 
*/

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
console.log(baseSalary);

// procedural programming
// we have functions at one side and variables at the other side
function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
console.log(getWage(baseSalary, overtime, rate));

// Object-oriented programming
// there're a few benefits writing in this way
// 1. the function doesn't have parameters, less dependency to inputs, if we compare to proceduarl way of writing
// 2. 
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    // the function we noticed has no parameters
    // the best functions are those with no parameters - Robert C Martin
    getWage: function() {
        // "this" acts like "self" in python (but not exactly the same), and represents the object / instance. Here "this" is employee object.
        return this.baseSalary + (this.overtime * this.rate);
    }
};
console.log(employee.getWage());
