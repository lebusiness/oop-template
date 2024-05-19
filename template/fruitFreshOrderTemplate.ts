import { HandleOrderTemplate, PaymentMethod } from "./handleOrderTemplate";

export class FruitFreshOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Фруктовый фреш готовиться по простому рецепту.
    `;
  }

  protected shouldWaterHeating() {
    return false;
  }

  protected getDishName() {
    return "Стакан";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["cash", "qr", "card"];
  }
}
