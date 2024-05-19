import { Topper } from "../../beverageFabricAbstract/interfaces/topper";

export class Cream implements Topper {
  public getCost() {
    return 10;
  }

  public getName() {
    return "Cream";
  }
}

export class Syrup implements Topper {
  public getCost() {
    return 7;
  }

  public getName() {
    return "Syrup";
  }
}
