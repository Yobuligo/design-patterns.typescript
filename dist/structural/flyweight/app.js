"use strict";
var FlyWeight;
(function (FlyWeight) {
    var ClassMeta = /** @class */ (function () {
        function ClassMeta(type) {
            this.type = type;
        }
        Object.defineProperty(ClassMeta.prototype, "name", {
            get: function () {
                return this.type.name;
            },
            enumerable: false,
            configurable: true
        });
        return ClassMeta;
    }());
    var ClassMetaRepo = /** @class */ (function () {
        function ClassMetaRepo() {
            this.classMetas = new Map();
        }
        ClassMetaRepo.getInstance = function () {
            var _a;
            return (_a = this._instance) !== null && _a !== void 0 ? _a : this.createInstance();
        };
        ClassMetaRepo.prototype.fetch = function (type) {
            var _a;
            return (_a = this.find(type)) !== null && _a !== void 0 ? _a : this.create(type);
        };
        ClassMetaRepo.prototype.find = function (type) {
            var classMeta = this.classMetas.get(type);
            if (classMeta) {
                console.log("Fetch class meta from cache");
            }
            return classMeta;
        };
        ClassMetaRepo.prototype.create = function (type) {
            var classMeta = new ClassMeta(type);
            this.classMetas.set(type, classMeta);
            console.log("Fetch class meta by initialization");
            return classMeta;
        };
        ClassMetaRepo.createInstance = function () {
            this._instance = new ClassMetaRepo();
            return this._instance;
        };
        return ClassMetaRepo;
    }());
    var Test = /** @class */ (function () {
        function Test() {
        }
        Object.defineProperty(Test.prototype, "classMeta", {
            get: function () {
                return ClassMetaRepo.getInstance().fetch(Test);
            },
            enumerable: false,
            configurable: true
        });
        return Test;
    }());
    console.log(new Test().classMeta.name);
    console.log(new Test().classMeta.name);
    console.log(new Test().classMeta.name);
})(FlyWeight || (FlyWeight = {}));
//# sourceMappingURL=app.js.map