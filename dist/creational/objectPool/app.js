"use strict";
var ObjectPool;
(function (ObjectPool_1) {
    var ObjectPool = /** @class */ (function () {
        function ObjectPool(initializer, capacity) {
            this.initializer = initializer;
            this.capacity = capacity;
            this.acquired = [];
            this.released = [];
        }
        ObjectPool.prototype.acquire = function () {
            if (this.released.length > 0) {
                return this.checkout(this.released[0]);
            }
            if (this.acquired.length < this.capacity) {
                var object = this.initializer(this.acquired.length + 1);
                return this.checkout(object);
            }
            throw new Error("Capacity exhausted");
        };
        ObjectPool.prototype.release = function (object) {
            this.released.push(object);
            this.acquired.splice(this.acquired.indexOf(object), 1);
        };
        ObjectPool.prototype.checkout = function (object) {
            this.acquired.push(object);
            this.released.splice(this.released.indexOf(object), 1);
            return object;
        };
        return ObjectPool;
    }());
    var Test = /** @class */ (function () {
        function Test(text) {
            this.text = text;
        }
        return Test;
    }());
    var objectPool = new ObjectPool(function (index) {
        return new Test(index.toString());
    }, 3);
    console.log(objectPool.acquire().text);
    console.log(objectPool.acquire().text);
    var test = objectPool.acquire();
    console.log(test.text);
    try {
        console.log(objectPool.acquire().text);
    }
    catch (error) {
        console.log(error.message);
    }
    objectPool.release(test);
    console.log(objectPool.acquire().text);
})(ObjectPool || (ObjectPool = {}));
//# sourceMappingURL=app.js.map