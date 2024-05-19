"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = exports.Coffee = exports.TeaLeaves = void 0;
class TeaLeaves {
    getCost() {
        return 5;
    }
    getName() {
        return "Tea leaves";
    }
}
exports.TeaLeaves = TeaLeaves;
class Coffee {
    getCost() {
        return 8;
    }
    getName() {
        return "Coffee";
    }
}
exports.Coffee = Coffee;
class Fruit {
    getCost() {
        return 3;
    }
    getName() {
        return "Fruit";
    }
}
exports.Fruit = Fruit;
