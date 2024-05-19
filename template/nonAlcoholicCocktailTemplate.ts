import { HandleOrderTemplate, PaymentMethod } from "./handleOrderTemplate";

export class NonAlcoholicCocktailOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Безалкогольный коктейль готовиться по простому рецепту.
    `;
  }

  protected shouldWaterHeating() {
    return false;
  }

  protected getDishName() {
    return "Стакан";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["cash", "qr"];
  }
}
