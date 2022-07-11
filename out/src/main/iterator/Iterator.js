"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Iterator = /** @class */ (function () {
    function Iterator(root) {
        this.root = root;
        this.stack = [];
        this.reset();
    }
    Iterator.prototype.hasNext = function () {
        if (this.stack.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Iterator.prototype.next = function () {
        var next = this.stack[0];
        this.stack.splice(this.stack.indexOf(next), 1);
        var children = next.getChildren();
        if (children !== undefined) {
            children.push.apply(children, this.stack);
            this.stack = children;
        }
        return next;
    };
    Iterator.prototype.reset = function () {
        this.stack.splice(0, this.stack.length);
        this.stack.push(this.root);
    };
    return Iterator;
}());
exports.Iterator = Iterator;
//# sourceMappingURL=Iterator.js.map