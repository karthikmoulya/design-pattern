"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor() {
        this.name = '';
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    getDimesions() {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        };
    }
}
exports.Table = Table;
