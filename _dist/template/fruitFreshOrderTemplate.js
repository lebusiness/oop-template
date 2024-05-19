"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitFreshOrderTemplate = void 0;
const handleOrderTemplate_1 = require("./handleOrderTemplate");
class FruitFreshOrderTemplate extends handleOrderTemplate_1.HandleOrderTemplate {
    getReceipt() {
        return `
      Фруктовый фреш готовиться по простому рецепту.
    `;
    }
    shouldWaterHeating() {
        return false;
    }
    getDishName() {
        return "Стакан";
    }
    getPaymentMethods() {
        return ["cash", "qr", "card"];
    }
}
exports.FruitFreshOrderTemplate = FruitFreshOrderTemplate;
