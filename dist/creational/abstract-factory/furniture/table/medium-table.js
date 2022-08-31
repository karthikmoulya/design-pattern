"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("./table");
class MediumTable extends table_1.Table {
    constructor() {
        super();
        this.name = 'MediumTable';
        this.height = 80;
        this.width = 80;
        this.depth = 80;
    }
}
exports.default = MediumTable;
