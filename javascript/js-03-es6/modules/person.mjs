/******************************************
 * Topic modules
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 */

// define Person class
export class Person {

    constructor(name) {
        this.name = name;
    } 
    walk() {console.log('walk along');}
}
