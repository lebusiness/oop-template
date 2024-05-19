"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = exports.Water = void 0;
class Water {
    getCost() {
        return 1;
    }
    getName() {
        return "Water";
    }
}
exports.Water = Water;
class Juice {
    getCost() {
        return 4;
    }
    getName() {
        return "Juice";
    }
}
exports.Juice = Juice;
