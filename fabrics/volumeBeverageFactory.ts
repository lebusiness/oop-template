import { Beverage } from "../beverageAbstract/Beverage";
import {
  BeverageWithIngridients,
  FruitFresh,
  NonAlcoholicCocktail,
  Tea,
} from "./begeragesByFabric";

export type BeverageType = "tea" | "cocktail" | "fresh";

export class Volume {
  constructor(public volume: number) {}
}

export abstract class VolumeFactory {
  public abstract createBeverage(type: BeverageType): BeverageWithIngridients;
}

export class SmallVolumeFactory extends VolumeFactory {
  public createBeverage(type: BeverageType) {
    if (type === "tea") {
      return new Tea(0.4);
    } else if (type === "cocktail") {
      return new NonAlcoholicCocktail(0.4);
    }
    return new FruitFresh(0.4);
  }
}

export class MediumVolumeFactory extends VolumeFactory {
  public createBeverage(type: BeverageType) {
    if (type === "tea") {
      return new Tea(0.6);
    } else if (type === "cocktail") {
      return new NonAlcoholicCocktail(0.6);
    }
    return new FruitFresh(0.6);
  }
}

export class LargeVolumeFactory extends VolumeFactory {
  public createBeverage(type: BeverageType) {
    if (type === "tea") {
      return new Tea(0.8);
    } else if (type === "cocktail") {
      return new NonAlcoholicCocktail(0.8);
    }
    return new FruitFresh(0.8);
  }
}
