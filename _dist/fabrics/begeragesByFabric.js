"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitFresh = exports.NonAlcoholicCocktail = exports.Tea = void 0;
const Beverage_1 = require("../beverageAbstract/Beverage");
const subfabrics_1 = require("./subfabrics/subfabrics");
class BeverageWithFabric extends Beverage_1.Beverage {
    constructor(volume) {
        super();
        this.volume = volume;
    }
    getIngridients() {
        return [
            this.ingridientFabric.getBasement(),
            this.ingridientFabric.getMainIngridient(),
            this.ingridientFabric.getTopper(),
        ];
    }
    getCost() {
        const cost = this.getIngridients().reduce((acc, val) => val.getCost() + acc, 0);
        return Math.floor(cost * this.volume);
    }
}
class Tea extends BeverageWithFabric {
    constructor() {
        super(...arguments);
        this.ingridientFabric = new subfabrics_1.TeaComponentsFabric();
    }
    getDescription() {
        return "Tea";
    }
}
exports.Tea = Tea;
class NonAlcoholicCocktail extends BeverageWithFabric {
    constructor() {
        super(...arguments);
        this.ingridientFabric = new subfabrics_1.NonAlcoholicCocktailComponentsFabric();
    }
    getDescription() {
        return "Non Alcoholic coctail";
    }
}
exports.NonAlcoholicCocktail = NonAlcoholicCocktail;
class FruitFresh extends BeverageWithFabric {
    constructor() {
        super(...arguments);
        this.ingridientFabric = new subfabrics_1.FruitFreshComponentsFabric();
    }
    getDescription() {
        return "Fruit fresh";
    }
}
exports.FruitFresh = FruitFresh;
