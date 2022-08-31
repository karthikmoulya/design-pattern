import BigChair from './big-chair';
import MediumChair from './medium-chair';
import SmallChair from './small-chair';
import { IChair, Chair } from './chair';

export default class ChairFactory {
  static getChair(chair: string): IChair {
    try {
      if (chair === 'BigChair') {
        return new BigChair();
      } else if (chair === 'MediumChair') {
        return new MediumChair();
      } else if (chair === 'SmallChair') {
        return new SmallChair();
      } else {
        throw new Error('No Class Found');
      }
    } catch (error) {
      console.log(error);
    }

    return new Chair();
  }
}
