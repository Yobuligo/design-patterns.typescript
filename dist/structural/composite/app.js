"use strict";
var Composite;
(function (Composite) {
    var Node = /** @class */ (function () {
        function Node(title) {
            this.title = title;
            this._children = [];
        }
        Object.defineProperty(Node.prototype, "children", {
            get: function () {
                return this._children;
            },
            enumerable: false,
            configurable: true
        });
        Node.prototype.add = function (node) {
            this._children.push(node);
        };
        return Node;
    }());
    var displayNode = function (node) {
        console.log(node.title);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child_1 = _a[_i];
            displayNode(child_1);
        }
    };
    var root = new Node("Root");
    var child = new Node("1");
    child.add(new Node("1.1"));
    child.add(new Node("1.2"));
    root.add(child);
    child = new Node("2");
    child.add(new Node("2.1"));
    child.add(new Node("2.2"));
    root.add(child);
    displayNode(root);
})(Composite || (Composite = {}));
//# sourceMappingURL=app.js.map