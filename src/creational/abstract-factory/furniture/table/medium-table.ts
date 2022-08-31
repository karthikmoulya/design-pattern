import { Table } from './table';

export default class MediumTable extends Table {
  constructor() {
    super();
    this.name = 'MediumTable';
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }
}
