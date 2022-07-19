import { node } from "./Node";
import { NodePrinter } from "./NodePrinter";

const rootNode = node("root")
  .addNode(node("1").addNode(node("1.1")).addNode(node("1.2")))
  .addNode(
    node("2").addNode(node("2.1")).addNode(node("2.2")).addNode(node("2.3"))
  )
  .addNode(node("3"))
  .addNode(
    node("4").addNode(node("4.1").addNode(node("4.1.1")).addNode(node("4.1.2")).addNode(node("4.1.3"))).addNode(node("4.2")).addNode(node("4.3"))
  );

const nodePrinter = new NodePrinter()
nodePrinter.print(rootNode)