import { Base } from "./interfaces/base";
import { MainIngridient } from "./interfaces/mainIngridient";
import { Topper } from "./interfaces/topper";

export abstract class BeverageComponentsFabric {
  public abstract getBasement(): Base;
  public abstract getMainIngridient(): MainIngridient;
  public abstract getTopper(): Topper;
}
