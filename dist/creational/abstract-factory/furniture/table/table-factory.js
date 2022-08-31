"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bid_table_1 = require("./bid-table");
const medium_table_1 = require("./medium-table");
const small_table_1 = require("./small-table");
const table_1 = require("./table");
class TableFactory {
    static getTable(table) {
        try {
            if (table === 'BigTable') {
                return new bid_table_1.default();
            }
            else if (table === 'MediumTable') {
                return new medium_table_1.default();
            }
            else if (table === 'SmallTable') {
                return new small_table_1.default();
            }
            else {
                throw new Error('No Class Found');
            }
        }
        catch (error) {
            console.log(error);
        }
        return new table_1.Table();
    }
}
exports.default = TableFactory;
