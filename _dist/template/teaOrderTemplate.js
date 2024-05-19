"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeaOrderTemplate = void 0;
const handleOrderTemplate_1 = require("./handleOrderTemplate");
class TeaOrderTemplate extends handleOrderTemplate_1.HandleOrderTemplate {
    getReceipt() {
        return `
      Чай готовиться по простому рецепту.
    `;
    }
    shouldWaterHeating() {
        return true;
    }
    getDishName() {
        return "Чашка";
    }
    getPaymentMethods() {
        return ["card", "qr"];
    }
}
exports.TeaOrderTemplate = TeaOrderTemplate;
