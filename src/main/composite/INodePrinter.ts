import { INode } from "./INode";

export interface INodePrinter {
  print(node: INode, indent?: number): void;
}
