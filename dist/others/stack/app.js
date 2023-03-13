"use strict";
var Stack;
(function (Stack_1) {
    var Stack = /** @class */ (function () {
        function Stack() {
            this.stack = [];
        }
        Stack.prototype.isEmpty = function () {
            return this.stack.length === 0;
        };
        Stack.prototype.push = function (value) {
            this.stack.push(value);
        };
        Stack.prototype.pop = function () {
            if (this.isEmpty()) {
                return false;
            }
            this.stack.splice(this.stack.length - 1, 1);
            return true;
        };
        Stack.prototype.peek = function () {
            return this.stack[this.stack.length - 1];
        };
        return Stack;
    }());
    var stack = new Stack();
    console.log(stack.peek());
    stack.push("first");
    stack.push("second");
    console.log(stack.peek());
    stack.pop();
    console.log(stack.peek());
})(Stack || (Stack = {}));
//# sourceMappingURL=app.js.map