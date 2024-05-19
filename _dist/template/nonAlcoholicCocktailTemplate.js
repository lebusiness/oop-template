"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonAlcoholicCocktailOrderTemplate = void 0;
const handleOrderTemplate_1 = require("./handleOrderTemplate");
class NonAlcoholicCocktailOrderTemplate extends handleOrderTemplate_1.HandleOrderTemplate {
    getReceipt() {
        return `
      Безалкогольный коктейль готовиться по простому рецепту.
    `;
    }
    shouldWaterHeating() {
        return false;
    }
    getDishName() {
        return "Стакан";
    }
    getPaymentMethods() {
        return ["cash", "qr"];
    }
}
exports.NonAlcoholicCocktailOrderTemplate = NonAlcoholicCocktailOrderTemplate;
