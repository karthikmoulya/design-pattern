"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.buildingType = '';
        this.wallMaterialType = '';
    }
    construction() {
        return `This is ${this.wallMaterialType} ${this.buildingType} with ${this.doors} door (s) and ${this.windows} window (s)`;
    }
}
exports.default = House;
