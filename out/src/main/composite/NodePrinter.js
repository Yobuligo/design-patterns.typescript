"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePrinter = void 0;
var Println_1 = require("../core/Println");
var NodePrinter = /** @class */ (function () {
    function NodePrinter() {
    }
    NodePrinter.prototype.print = function (node, indent) {
        var _this = this;
        if (indent === void 0) { indent = 0; }
        var indentation = "  ";
        (0, Println_1.println)("".concat(indentation.repeat(indent)).concat(node.name));
        node.getChildren().forEach(function (childNode) {
            _this.print(childNode, indent + 1);
        });
    };
    return NodePrinter;
}());
exports.NodePrinter = NodePrinter;
//# sourceMappingURL=NodePrinter.js.map