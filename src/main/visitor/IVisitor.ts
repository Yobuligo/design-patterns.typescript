import { Button } from "./Button";
import { Table } from "./Table";

export interface IVisitor<T> {
  visit(table: Table): T | null;
  visit(button: Button): T | null;
}
