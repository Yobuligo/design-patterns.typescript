"use strict";
var Iterator;
(function (Iterator_1) {
    var Iterator = /** @class */ (function () {
        function Iterator(elements) {
            this.elements = elements;
            this.cursor = -1;
        }
        Object.defineProperty(Iterator.prototype, "hasNext", {
            get: function () {
                return this.elements[this.cursor + 1] !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        Iterator.prototype.next = function () {
            this.cursor++;
            return this.elements[this.cursor];
        };
        return Iterator;
    }());
    var iterator = new Iterator(["one", "two", "three"]);
    while (iterator.hasNext) {
        console.log(iterator.next());
    }
})(Iterator || (Iterator = {}));
//# sourceMappingURL=app.js.map