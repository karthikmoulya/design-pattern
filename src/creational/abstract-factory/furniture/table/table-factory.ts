import BigTable from './bid-table';
import MediumTable from './medium-table';
import SmallTable from './small-table';
import { Table, ITable } from './table';

export default class TableFactory {
  static getTable(table: string): ITable {
    try {
      if (table === 'BigTable') {
        return new BigTable();
      } else if (table === 'MediumTable') {
        return new MediumTable();
      } else if (table === 'SmallTable') {
        return new SmallTable();
      } else {
        throw new Error('No Class Found');
      }
    } catch (error) {
      console.log(error);
    }
    return new Table();
  }
}
