import { Audi } from "./Audi";
import { ICar } from "./ICar";
import { ICarFactory } from "./ICarFactory";

export class AudiFactory implements ICarFactory {
  create(): ICar {
    return new Audi();
  }
}
