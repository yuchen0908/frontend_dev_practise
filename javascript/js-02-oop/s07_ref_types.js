/************************************************************
 * topic 7 - difference between primitives and object
 * Primitives are copied by their value;
 * Objects are copied by their reference;
*/

// s1 - x, y are PrimitiveTypes
console.log("Demonstrate Primitive Type copy behaviour")
let x = 10;
let y = x;              // we're copying value 10 to y.
x = 20;                 // when we re-assign x's value, it doesn't change y's value 
console.log(x);
console.log(y);         // hence, y will be 10.

// s2 - x,y are ReferenceTypes - literally means that it copies memory pointer / address
console.log("Demonstrate Reference Type copy behaviour")
let p = {value: 10};
let q = p;              // we're copying p's memory pointer/address to q. 
p.value = 20;           // when the value is changed to 20, the data in the memory is updated;
console.log(p.value);
console.log(q.value);   // however, q points to the same address as p, hence, value is updated accordingly.
