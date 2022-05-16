import { ICar } from "./ICar";

export interface ICarFactory {
  create(): ICar;
}
