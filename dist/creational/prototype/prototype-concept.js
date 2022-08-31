"use strict";
class MyClass {
    constructor(field) {
        this.field = field;
    }
    clone() {
        // return Object.assign({}, this); //Shallow Copy
        return JSON.parse(JSON.stringify(this)); //Deep Copy
    }
}
//The Client
//Crerating an object containg an array
const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1 ; ${JSON.stringify(OBJECT1.field)}`);
const OBJECT2 = OBJECT1.clone();
console.log(`OBJECT2 ; ${JSON.stringify(OBJECT2.field)}`);
//Change the value of one of the elements in OBJECT2
//Depending on your clone method, either a shallow or deep copy was performed
OBJECT2.field[1] = 101;
console.log(`OBJECT2 ; ${JSON.stringify(OBJECT2.field)}`);
console.log(`OBJECT1 ; ${JSON.stringify(OBJECT1.field)}`);
