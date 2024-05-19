import { Beverage } from "../../beverageAbstract/Beverage";
import { BeverageWithIngridients } from "../../fabrics/begeragesByFabric";

export abstract class BeverageDecorator extends Beverage {
  protected beverage: BeverageWithIngridients;

  constructor(beverage: BeverageWithIngridients) {
    super();
    this.beverage = beverage;
  }

  getIngridients() {
    return this.beverage.getIngridients();
  }
}
