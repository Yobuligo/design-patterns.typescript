import { IMutableList } from "../core/collections/lists/IMutableList";

export interface IHaveChildren<T> {
  getChildren(): T[];
  getTempChildren(): IMutableList<T>;
}
