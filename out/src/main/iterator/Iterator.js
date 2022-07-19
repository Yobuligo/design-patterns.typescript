"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Functions_1 = require("../core/collections/Functions");
var Iterator = /** @class */ (function () {
    function Iterator(root) {
        this.root = root;
        this.stack = (0, Functions_1.mutableListOf)();
        this.initializeStack();
    }
    Iterator.prototype.hasNext = function () {
        return this.stack.isNotEmpty();
    };
    Iterator.prototype.next = function () {
        var next = this.stack.first();
        this.stack.remove(next);
        var children = next.getChildren();
        if (children !== undefined) {
            this.stack.addList(0, children);
        }
        return next;
    };
    Iterator.prototype.reset = function () {
        this.initializeStack();
    };
    Iterator.prototype.initializeStack = function () {
        this.stack.removeAll();
        this.stack.add(this.root);
    };
    return Iterator;
}());
exports.Iterator = Iterator;
//# sourceMappingURL=Iterator.js.map