let topicNum = 8;

/************************************************************
 * topic 1 - a statement should be terminated by semi-colon.
*/
if(topicNum === 1) {

    console.log('hello world!'); 

}

/************************************************************
 * topic 2 - variable 
 * rule 1 - variable name cannot be a keyword reserved by JS
 * rule 2 - variable should be meaningful
 * rule 3 - cannot start with a number
 * rule 4 - cannot contain a space or a hyphen (-)
 * rule 5 - they're case sensitive
*/
if (topicNum === 2) {

    let myName = 'Mosh';
    console.log(myName);
    
    let firstName = 'Jack';
    let lastName = 'Slingsby';
    console.log(firstName);
    console.log(lastName);

}

/************************************************************
 * topic 3 - constant 
 * If there is no need to change a value in the future => const
 * otherwise, use "let"
*/
if (topicNum === 3) {

    const interestRate = 0.3;
    console.log(interestRate);

}

/************************************************************
 * topic 4 - primitives / value types
 * String
 * Number, doesn't differentiate integer and float
 * Boolean
 * null
 * undefined, undefined value's typeof is also undefined.
*/
if (topicNum === 4) {

    let myName = 'Mosh';            // string literal
    let age = 30;                   // number literal
    let isApproved = true;          // boolean literal , used in logic
    let firstName;                  // if not assigned, then it's "undefined"
    let selectedColor = null;       // we want to clear value from previous assignment
    console.log(myName);
    console.log(age);
    console.log(isApproved);
    console.log(firstName);
    console.log(selectedColor);

}

/************************************************************
 * topic 5 - dynamic typing
 * it means that JS allows to change the data type of a variable
 * by assigning different primitives;
*/
if (topicNum === 5) {

    let myName = 'Mosh';
    console.log(typeof myName);
    myName = 1;
    console.log(typeof myName);

}

/************************************************************
 * topic 6 - reference types - object
 * Object, eg describe a person, then a person has different attributes
 *      such as age and name
 *      hence, we create a list of key-value pairs and enclose them in curly braces
 *      we call it an object.
*/
if (topicNum === 6) {

    let person = {
        name: 'Mosh',
        age: 30
    };             // {} is an object literal
    console.log(person);

    // we can use dot notation to access the value of the property
    // we can also use it to update the value
    person.name = 'John';
    console.log(person.name);

    // we can also use bracket notation to access the value of the property
    // we can also use it to update the value
    person['name'] = 'Mary';
    console.log(person['name']);

    // dot notation is concise and shorter - default choice
    // we don't know the name of the property / attributes at the time of writing
    // it will be determined in the runtime
    let selection = 'name';         // it's chosen by end-user
    person[selection] = 'Bruce';
    console.log(person[selection]);

}

/************************************************************
 * topic 7 - reference types - array
 * Array, a list of Objects, such as shopping carts
*/
if (topicNum === 7) {

    let selectedColors = ['red', 'blue'];   // [] is an array literal
    console.log(selectedColors);            // we would notice that the output has indices
    console.log(selectedColors[0]);         // we can use bracket and index to access element

    selectedColors[2] = 'green'             // length is dynamic, and each element in the array is dynamic (data type perspective)
    console.log(selectedColors);
    console.log(selectedColors.length);
    console.log(selectedColors[2].length)   // the string saved is also an Object, associated with things like length etc.

}

/************************************************************
 * topic 8 - reference types - functions
 * function is a set of statements that perform a task or calculate a value
 * we don't need ";" after we declare a function
*/
if (topicNum === 8) {
    
    // define a function
    // personName is the parameter
    function greet(firstName, lastName) {
        // write some logic
        console.log('hello ' + firstName + ' ' + lastName); // "+" is the concat
    }
    greet('John', 'Smith');      // John and Smith are the arguments
    greet('Mary');               // given that we didn't define the lastName, it will show undefined

    // let's define a function that square the numbers
    // this example also shows let is block-scoped
    function square(number) {
        return number * number;
    }
    let number = square(2);
    console.log(number);

}