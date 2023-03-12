"use strict";
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
var multitonSecond = Multiton.getInstance("second");
//# sourceMappingURL=app.js.map