import { dimension } from './dimesion';

export default interface IChair {
  height: number;
  width: number;
  depth: number;
}

export default class Chair implements IChair {
  height: number = 0;
  width: number = 0;
  depth: number = 0;

  getDimesions(): dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
