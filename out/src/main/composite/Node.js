"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.node = void 0;
var Node = /** @class */ (function () {
    function Node(name) {
        this.name = name;
        this.nodes = [];
    }
    Node.prototype.addNode = function (node) {
        this.nodes.push(node);
        return this;
    };
    Node.prototype.getChildren = function () {
        return this.nodes;
    };
    Node.prototype.removeNode = function (node) {
        this.nodes.splice(this.nodes.indexOf(node), 1);
        return this;
    };
    return Node;
}());
exports.default = Node;
function node(name) {
    return new Node(name);
}
exports.node = node;
//# sourceMappingURL=Node.js.map