import { HandleOrderTemplate, PaymentMethod } from "./handleOrderTemplate";

export class TeaOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Чай готовиться по простому рецепту.
    `;
  }

  protected shouldWaterHeating() {
    return true;
  }

  protected getDishName() {
    return "Чашка";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["card", "qr"];
  }
}
