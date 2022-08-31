"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const furniture_factory_1 = require("./furniture-factory");
let FURNITURE = furniture_factory_1.default.getFurniture('SmallChair');
console.table(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.getDimesions());
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.name);
FURNITURE = furniture_factory_1.default.getFurniture('BigTable');
console.table(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.getDimesions());
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.name);
