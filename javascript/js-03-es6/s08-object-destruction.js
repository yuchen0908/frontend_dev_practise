/******************************************
 * Topic Object destruction
 * The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 * reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */


let caseNum = 4;

// let's unpack address below
const address = {
    street: 'a',
    city:'b',
    country:'c'
};

// method 1 - tedius way
if (caseNum == 1) {

    console.log('traditional way to unpack Object');
    const street = address.street;
    const city = address.city;
    const country = address.country;
    console.log(street);
    console.log(city);
    console.log(country);
    

}

// method 2 - object destruction
//      * The object and array literal expressions provide an easy way to create ad hoc packages of data. for example, const x = [1,2,3];
//      * The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable. 

// for Object it's the same
//      * Similarly, you can destructure objects on the left-hand side of the assignment.
if (caseNum == 2) {
    console.log("object destruction");
    // unpack by assigning values to keys 
    // and use keys as the new variable
    const {street, city, country} = address;
    console.log(street);
    console.log(city);
    console.log(country);
}

// some variants:
// case 1 - if we just want city
if (caseNum == 3) {
    console.log("object destruction - individual one");
    const {city} = address;
    console.log(city);
}
// case 2 - if we want to rename city
if (caseNum == 4) {
    console.log("object destruction - individual one");
    const {city:ct} = address;
    console.log(ct);
}