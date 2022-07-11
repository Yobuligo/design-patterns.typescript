"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions_1 = require("../core/collections/Functions");
var Println_1 = require("../core/Println");
var ObjectPool = /** @class */ (function () {
    function ObjectPool(factory, maxNumber) {
        this.factory = factory;
        this.maxNumber = maxNumber;
        this.acquired = (0, Functions_1.mutableListOf)();
        this.released = (0, Functions_1.mutableListOf)();
    }
    ObjectPool.prototype.acquire = function () {
        return this.checkout(this.fetch());
    };
    ObjectPool.prototype.release = function (object) {
        this.released.add(object);
        this.acquired.remove(object);
    };
    ObjectPool.prototype.fetch = function () {
        if (this.released.isNotEmpty()) {
            return this.released.first();
        }
        else {
            return this.create();
        }
    };
    ObjectPool.prototype.create = function () {
        if (this.acquired.size < this.maxNumber) {
            return this.factory(this.acquired.size + 1);
        }
        else {
            throw new Error("No more objects available");
        }
    };
    ObjectPool.prototype.checkout = function (object) {
        this.acquired.add(object);
        this.released.remove(object);
        return object;
    };
    return ObjectPool;
}());
function objectPool(factory, maxNumber) {
    if (maxNumber === void 0) { maxNumber = 3; }
    return new ObjectPool(factory, maxNumber);
}
var Person = /** @class */ (function () {
    function Person(firstname) {
        this.firstname = firstname;
    }
    return Person;
}());
var personPool = objectPool(function (index) {
    return new Person(index.toString());
});
(0, Println_1.println)(personPool.acquire().firstname);
(0, Println_1.println)(personPool.acquire().firstname);
var third = personPool.acquire();
(0, Println_1.println)(third.firstname);
personPool.release(third);
(0, Println_1.println)(personPool.acquire().firstname);
(0, Println_1.println)(personPool.acquire().firstname);
//# sourceMappingURL=app.js.map