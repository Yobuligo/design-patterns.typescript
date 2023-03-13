"use strict";
var Delegation;
(function (Delegation) {
    var Base = /** @class */ (function () {
        function Base() {
        }
        Base.prototype.call = function (value) {
            console.log("Callee was called with value '".concat(value, "'"));
        };
        return Base;
    }());
    var Caller = /** @class */ (function () {
        function Caller(callee) {
            this.callee = callee;
        }
        Caller.prototype.call = function (value) {
            this.callee.call(value);
        };
        return Caller;
    }());
    var caller = new Caller(new Base());
    caller.call("My value");
})(Delegation || (Delegation = {}));
//# sourceMappingURL=app.js.map