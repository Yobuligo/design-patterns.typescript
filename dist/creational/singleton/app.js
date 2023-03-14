"use strict";
var Singleton;
(function (Singleton_1) {
    var Singleton = /** @class */ (function () {
        function Singleton() {
        }
        Singleton.getInstance = function () {
            var _a;
            return (_a = this.instance) !== null && _a !== void 0 ? _a : this.create();
        };
        Singleton.create = function () {
            this.instance = new Singleton();
            return this.instance;
        };
        return Singleton;
    }());
    var singleton = Singleton.getInstance();
})(Singleton || (Singleton = {}));
//# sourceMappingURL=app.js.map