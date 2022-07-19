import { IList } from "../core/collections/lists/IList";

export interface IHaveChildren<T> {
  getChildren(): IList<T>;
}
