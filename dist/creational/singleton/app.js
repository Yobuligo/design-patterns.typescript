"use strict";
var Singleton;
(function (Singleton_1) {
    var Singleton = /** @class */ (function () {
        function Singleton() {
        }
        Singleton.getInstance = function () {
            if (!this.instance) {
                this.instance = new Singleton();
            }
            return this.instance;
        };
        return Singleton;
    }());
    var singleton = Singleton.getInstance();
})(Singleton || (Singleton = {}));
//# sourceMappingURL=app.js.map