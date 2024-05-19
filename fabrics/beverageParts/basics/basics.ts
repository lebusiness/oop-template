import { Base } from "../../beverageFabricAbstract/interfaces/base";

export class Water implements Base {
  public getCost() {
    return 1;
  }

  public getName() {
    return "Water";
  }
}

export class Juice implements Base {
  public getCost() {
    return 4;
  }

  public getName() {
    return "Juice";
  }
}
