import { INode } from "./INode";

export default class Node implements INode {
  private nodes: INode[] = [];

  constructor(readonly name: string) {}

  addNode(node: INode): INode {
    this.nodes.push(node);
    return this;
  }

  getChildren(): INode[] {
    return this.nodes;
  }

  removeNode(node: INode): INode {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    return this;
  }
}

export function node(name: string): INode {
  return new Node(name);
}
