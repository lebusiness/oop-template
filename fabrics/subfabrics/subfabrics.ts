import { BeverageComponentsFabric } from "../beverageFabricAbstract/BeverageFabric";
import { Base } from "../beverageFabricAbstract/interfaces/base";
import { MainIngridient } from "../beverageFabricAbstract/interfaces/mainIngridient";
import { Topper } from "../beverageFabricAbstract/interfaces/topper";
import { Juice, Water } from "../beverageParts/basics/basics";
import {
  Fruit,
  TeaLeaves,
} from "../beverageParts/mainIngridients/mainIngridients";
import { Cream, Syrup } from "../beverageParts/toppers/toppers";

export class TeaComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Base {
    return new Water();
  }

  public getMainIngridient() {
    return new TeaLeaves();
  }

  public getTopper(): Topper {
    return new Cream();
  }
}

export class NonAlcoholicCocktailComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Base {
    return new Juice();
  }

  public getMainIngridient(): MainIngridient {
    return new Fruit();
  }

  public getTopper(): Topper {
    return new Syrup();
  }
}

export class FruitFreshComponentsFabric extends BeverageComponentsFabric {
  public getBasement(): Base {
    return new Juice();
  }

  public getMainIngridient(): MainIngridient {
    return new Fruit();
  }

  public getTopper(): Topper {
    return new Syrup();
  }
}
