"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var NodePrinter_1 = require("./NodePrinter");
var rootNode = (0, Node_1.node)("root")
    .addNode((0, Node_1.node)("1").addNode((0, Node_1.node)("1.1")).addNode((0, Node_1.node)("1.2")))
    .addNode((0, Node_1.node)("2").addNode((0, Node_1.node)("2.1")).addNode((0, Node_1.node)("2.2")).addNode((0, Node_1.node)("2.3")))
    .addNode((0, Node_1.node)("3"))
    .addNode((0, Node_1.node)("4").addNode((0, Node_1.node)("4.1").addNode((0, Node_1.node)("4.1.1")).addNode((0, Node_1.node)("4.1.2")).addNode((0, Node_1.node)("4.1.3"))).addNode((0, Node_1.node)("4.2")).addNode((0, Node_1.node)("4.3")));
var nodePrinter = new NodePrinter_1.NodePrinter();
nodePrinter.print(rootNode);
//# sourceMappingURL=app.js.map