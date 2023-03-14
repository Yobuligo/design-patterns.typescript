"use strict";
var Lazy;
(function (Lazy_1) {
    var Lazy = /** @class */ (function () {
        function Lazy(initializer) {
            this.initializer = initializer;
        }
        Object.defineProperty(Lazy.prototype, "instance", {
            get: function () {
                var _a;
                return (_a = this._instance) !== null && _a !== void 0 ? _a : this.create();
            },
            enumerable: false,
            configurable: true
        });
        Lazy.prototype.create = function () {
            this._instance = this.initializer();
            return this._instance;
        };
        return Lazy;
    }());
    var Test = /** @class */ (function () {
        function Test() {
            this.title = "Test";
        }
        return Test;
    }());
    var lazyTest = new Lazy(function () { return new Test(); });
    console.log(lazyTest.instance.title);
})(Lazy || (Lazy = {}));
//# sourceMappingURL=app.js.map