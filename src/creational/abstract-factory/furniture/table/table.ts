import { dimension } from '../../../factory/dimesion';

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimesions(): dimension;
}

export class Table implements ITable {
  name = '';
  height = 0;
  width = 0;
  depth = 0;

  getDimesions(): dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
