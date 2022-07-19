import { IVisitor } from "./IVisitor";

export interface IVisitable {
  accept<T>(visitor: IVisitor<T>): T;
}
