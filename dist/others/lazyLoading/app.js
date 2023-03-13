"use strict";
var Lazy;
(function (Lazy_1) {
    var Lazy = /** @class */ (function () {
        function Lazy(initializer) {
            this.initializer = initializer;
        }
        Object.defineProperty(Lazy.prototype, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = this.initializer();
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        return Lazy;
    }());
    var Test = /** @class */ (function () {
        function Test() {
            this.title = "Test";
        }
        return Test;
    }());
    var lazyTest = new Lazy(function () {
        return new Test();
    });
    console.log(lazyTest.instance.title);
})(Lazy || (Lazy = {}));
//# sourceMappingURL=app.js.map