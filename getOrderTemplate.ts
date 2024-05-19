import { Interface } from "node:readline/promises";
import {
  BeverageWithIngridients,
  FruitFresh,
  NonAlcoholicCocktail,
} from "./fabrics/begeragesByFabric";
import { HandleOrderTemplate } from "./template/handleOrderTemplate";
import { FruitFreshOrderTemplate } from "./template/fruitFreshOrderTemplate";
import { NonAlcoholicCocktailOrderTemplate } from "./template/nonAlcoholicCocktailTemplate";
import { TeaOrderTemplate } from "./template/teaOrderTemplate";

export const getOrderTemplate = (
  beverage: BeverageWithIngridients,
  reader: Interface
): HandleOrderTemplate => {
  if (beverage instanceof FruitFresh) {
    return new FruitFreshOrderTemplate(beverage, reader);
  } else if (beverage instanceof NonAlcoholicCocktail) {
    return new NonAlcoholicCocktailOrderTemplate(beverage, reader);
  }
  return new TeaOrderTemplate(beverage, reader);
};
