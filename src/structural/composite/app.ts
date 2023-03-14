namespace Composite {
  interface INode {
    readonly children: INode[];
    add(node: INode): void;
    readonly title: string;
  }

  class Node implements INode {
    private _children: INode[] = [];

    constructor(readonly title: string) {}

    get children(): INode[] {
      return this._children;
    }

    add(node: INode): void {
      this._children.push(node);
    }
  }

  const displayNode = (node: INode) => {
    console.log(node.title);
    for (const child of node.children) {
      displayNode(child);
    }
  };

  const root = new Node(`Root`);
  let child = new Node(`1`);
  child.add(new Node(`1.1`));
  child.add(new Node(`1.2`));
  root.add(child);
  child = new Node(`2`);
  child.add(new Node(`2.1`));
  child.add(new Node(`2.2`));
  root.add(child);

  displayNode(root);
}
