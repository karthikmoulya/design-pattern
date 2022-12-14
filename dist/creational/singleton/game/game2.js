"use strict";
//A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
const leaderboard_1 = require("./leaderboard");
class Game2 {
    constructor() {
        this.leaderboard = new leaderboard_1.default();
    }
    addWinner(position, name) {
        this.leaderboard.addWinner(position, name);
    }
}
exports.default = Game2;
