"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderTemplate = void 0;
const begeragesByFabric_1 = require("./fabrics/begeragesByFabric");
const fruitFreshOrderTemplate_1 = require("./template/fruitFreshOrderTemplate");
const nonAlcoholicCocktailTemplate_1 = require("./template/nonAlcoholicCocktailTemplate");
const teaOrderTemplate_1 = require("./template/teaOrderTemplate");
const getOrderTemplate = (beverage, reader) => {
    if (beverage instanceof begeragesByFabric_1.FruitFresh) {
        return new fruitFreshOrderTemplate_1.FruitFreshOrderTemplate(beverage, reader);
    }
    else if (beverage instanceof begeragesByFabric_1.NonAlcoholicCocktail) {
        return new nonAlcoholicCocktailTemplate_1.NonAlcoholicCocktailOrderTemplate(beverage, reader);
    }
    return new teaOrderTemplate_1.TeaOrderTemplate(beverage, reader);
};
exports.getOrderTemplate = getOrderTemplate;
