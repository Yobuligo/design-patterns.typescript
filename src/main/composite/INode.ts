export interface INode {
  readonly name: string;
  addNode(node: INode): INode;
  getChildren(): INode[];
  removeNode(node: INode): INode;
}
