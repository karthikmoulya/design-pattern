"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("../house-builder");
class HouseboatDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('House Boat')
            .setWallMaterialType('Wood')
            .setNumberDoors(4)
            .setNumberWindows(6)
            .getResult();
    }
}
exports.default = HouseboatDirector;
