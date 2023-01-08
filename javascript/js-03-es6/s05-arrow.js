/******************************************
 * Topic arrow function
 *      1. how a function evolve to an arrow function
 *      2. how to use it
 */


// how a function evolve to an arrow function
const square1 = function (number) {
    return number * number;
}

// ES6 way of creating function
// remove keyword "function", 
// and instead create an arrow sign indicating it's a function.
// PLEASE NOTE, at the end of an arrow function, we don't add ";"
const square2 = (number) => {
    return number * number;
}

// if we only have one argument, and one single line of statement "return"
// we can further simplify it
// it reads "number goes to number times number"
const square3 = number => number * number;

console.log(square1(5));
console.log(square2(5));
console.log(square3(5));

// 2. how to use arrow function
const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
]

// filter iterates each element from an array
//      * array.filter(predicate function)
//      * A predicate function is a function that takes one value as input and returns true / false based on whether the value satisfies the condition
//      * comparing the following two ways to fetch info from an array, arrow function is more concise.
const activeJobs = jobs.filter(function(job) {return job.isActive;});
console.log(activeJobs);

const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);