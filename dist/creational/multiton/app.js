"use strict";
var Multiton;
(function (Multiton_1) {
    var Multiton = /** @class */ (function () {
        function Multiton(key) {
            this.key = key;
        }
        Multiton.getInstance = function (key) {
            var instance = this.instances.get(key);
            if (!instance) {
                instance = new Multiton(key);
                this.instances.set(key, instance);
            }
            return instance;
        };
        Multiton.instances = new Map();
        return Multiton;
    }());
    var multitonFirst = Multiton.getInstance("first");
    var multitonFirstBackup = Multiton.getInstance("first");
    var multitonSecond = Multiton.getInstance("second");
    var multitonSecondBackup = Multiton.getInstance("second");
})(Multiton || (Multiton = {}));
//# sourceMappingURL=app.js.map