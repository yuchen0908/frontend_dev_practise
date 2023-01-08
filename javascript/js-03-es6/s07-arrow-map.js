/******************************************
 * Topic arrow function and "map" method
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
 * reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// s01 - a case with map function
const colors = ['red', 'green', 'blue'];
const items1 = colors.map(function(color) {
    return '<li>' + color + '</li>';
});
console.log(items1);

// a simlified version with arrow function.
const items2 = colors.map(color => `<li>${color}</li>`);
console.log(items2);