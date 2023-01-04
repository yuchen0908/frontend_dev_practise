/************************************************************
 * topic 8 - demonstrate functions' copy behaviour
*/


// q1 - let's guess what's the value of number
let number = 10;        // we define number as a value via "let". hence, it's scope is outside of function
function increase(number) {     // remember number here is a parameter, it has local scope within the function.
    number++;
    console.log(number);
}
increase(number);       // when we call increase, number value has passed to number parameter.
console.log(number);    // we didn't change number's value anywhere, hence, it would be 10. 


// q2 - let's guess what's the number of the obj
let obj = {value:10};       // we define the obj, and get it's address in the memory
function increase(obj){
    obj.value++;
}
// step1 - when calling increase, essentially, we have passed obj address to obj parameter (a Ref variable)
// step2 - then the value from the same address is updated with 1
increase(obj);              
console.log(obj);           // step3 - when we accessing the same pointer again, it would be 11.
