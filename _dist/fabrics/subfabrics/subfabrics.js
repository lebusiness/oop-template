"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitFreshComponentsFabric = exports.NonAlcoholicCocktailComponentsFabric = exports.TeaComponentsFabric = void 0;
const BeverageFabric_1 = require("../beverageFabricAbstract/BeverageFabric");
const basics_1 = require("../beverageParts/basics/basics");
const mainIngridients_1 = require("../beverageParts/mainIngridients/mainIngridients");
const toppers_1 = require("../beverageParts/toppers/toppers");
class TeaComponentsFabric extends BeverageFabric_1.BeverageComponentsFabric {
    getBasement() {
        return new basics_1.Water();
    }
    getMainIngridient() {
        return new mainIngridients_1.TeaLeaves();
    }
    getTopper() {
        return new toppers_1.Cream();
    }
}
exports.TeaComponentsFabric = TeaComponentsFabric;
class NonAlcoholicCocktailComponentsFabric extends BeverageFabric_1.BeverageComponentsFabric {
    getBasement() {
        return new basics_1.Juice();
    }
    getMainIngridient() {
        return new mainIngridients_1.Fruit();
    }
    getTopper() {
        return new toppers_1.Syrup();
    }
}
exports.NonAlcoholicCocktailComponentsFabric = NonAlcoholicCocktailComponentsFabric;
class FruitFreshComponentsFabric extends BeverageFabric_1.BeverageComponentsFabric {
    getBasement() {
        return new basics_1.Juice();
    }
    getMainIngridient() {
        return new mainIngridients_1.Fruit();
    }
    getTopper() {
        return new toppers_1.Syrup();
    }
}
exports.FruitFreshComponentsFabric = FruitFreshComponentsFabric;
