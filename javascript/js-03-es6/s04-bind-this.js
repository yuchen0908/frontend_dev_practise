/******************************************
 * Topic binding "this"
 *      from s03-this.js, we know that "this" has a reference issue if we don't use it wisely. For example, we cannot call a method outside an Object; otherwise, we refer to Window Object.
 *      binding "this" will resolve the issue.
 */

const person = {
    name: 'Mosh',
    walk() {
        console.log(this);
    } //this returns "person" Object, which we have defined.
};

// bind function will return a new instance
// and set "this" to the Object "person"
const walk = person.walk.bind(person);
walk();                     
