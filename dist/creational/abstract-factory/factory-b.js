"use strict";
// FactoryA Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB: ConcreteProductC';
    }
}
class FactoryB {
    static getObject(someProperty) {
        try {
            if (someProperty === 'a') {
                return new ConcreteProductA();
            }
            else if (someProperty === 'b') {
                return new ConcreteProductB();
            }
            else if (someProperty === 'c') {
                return new ConcreteProductC();
            }
            else {
                throw new Error('No class found');
            }
        }
        catch (error) {
            console.log(error);
        }
        return new ConcreteProduct();
    }
}
exports.FactoryB = FactoryB;
