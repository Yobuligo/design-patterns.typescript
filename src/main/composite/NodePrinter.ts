import { println } from "../core/Println";
import { INode } from "./INode";
import { INodePrinter } from "./INodePrinter";

export class NodePrinter implements INodePrinter {
  print(node: INode, indent: number = 0): void {
    const indentation = "  ";
    println(`${indentation.repeat(indent)}${node.name}`);
    node.getChildren().forEach((childNode) => {
      this.print(childNode, indent + 1);
    });
  }
}
