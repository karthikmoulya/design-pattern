"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chair {
    constructor() {
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
exports.default = Chair;
