import { FactoryA, IProductA } from './factory-a';
import { FactoryB, IProductB } from './factory-b';

interface IProdut extends IProductA, IProductB {}

class AbstractFactory {
  static createObject(factory: string): IProdut | undefined {
    try {
      if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }
      if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }
      throw new Error('No Factory Found');
    } catch (error) {
      console.log(error);
    }
  }
}

//The Client
let PRODUCT = AbstractFactory.createObject('aa');
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject('bc');
console.log(PRODUCT);
