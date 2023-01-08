/******************************************
 * Topic Spread Operator
 * 
 * The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
 * 
 * Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
 * reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

let caseNum = 2;

// dealing with Array
if (caseNum == 1) {

    console.log('Dealing with Array');

    const first = [1,2,3];
    const second = [4,5,6];

    // method 1 - traditional way
    const combined1 = first.concat(second);
    console.log(combined1);

    // method 2 - spread operator
    const combined2 = [...first, ...second];
    console.log(combined2);

    // benefit of spread operator
    const combined3 = [...first, 'a', ...second, 'b'];
    console.log(combined3);


}

// dealing with Object
if (caseNum == 2) {

    console.log('Dealing with Object');
    
    const first = {name:'Yu Chen'};
    const second = {job: 'data scientist'};

        // benefit of spread operator
    const combined = {...first, 'age':36, ...second};
    console.log(combined);

}
