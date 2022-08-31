"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_chair_1 = require("./big-chair");
const medium_chair_1 = require("./medium-chair");
const small_chair_1 = require("./small-chair");
const chair_1 = require("./chair");
class ChairFactory {
    static getChair(chair) {
        try {
            if (chair === 'BigChair') {
                return new big_chair_1.default();
            }
            else if (chair === 'MediumChair') {
                return new medium_chair_1.default();
            }
            else if (chair === 'SmallChair') {
                return new small_chair_1.default();
            }
            else {
                throw new Error('No Class Found');
            }
        }
        catch (error) {
            console.log(error);
        }
        return new chair_1.Chair();
    }
}
exports.default = ChairFactory;
