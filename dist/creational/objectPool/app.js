"use strict";
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        this.acquired = [];
        this.released = [];
    }
    ObjectPool.prototype.acquire = function () {
        var _a;
        return (_a = this.acquireOrNull()) !== null && _a !== void 0 ? _a : this.error("Capacity is exhausted");
    };
    ObjectPool.prototype.acquireOrNull = function () {
        throw new Error("Method not implemented.");
    };
    ObjectPool.prototype.release = function (object) {
        throw new Error("Method not implemented.");
    };
    ObjectPool.prototype.error = function (message) {
        throw new Error(message);
    };
    return ObjectPool;
}());
//# sourceMappingURL=app.js.map