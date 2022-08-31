"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_a_1 = require("./factory-a");
const factory_b_1 = require("./factory-b");
class AbstractFactory {
    static createObject(factory) {
        try {
            if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
                return factory_a_1.FactoryA.getObject(factory[1]);
            }
            if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                return factory_b_1.FactoryB.getObject(factory[1]);
            }
            throw new Error('No Factory Found');
        }
        catch (error) {
            console.log(error);
        }
    }
}
//The Client
let PRODUCT = AbstractFactory.createObject('aa');
console.log(PRODUCT);
PRODUCT = AbstractFactory.createObject('bc');
console.log(PRODUCT);
