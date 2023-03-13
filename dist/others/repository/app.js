"use strict";
var Repository;
(function (Repository_1) {
    var Repository = /** @class */ (function () {
        function Repository() {
            this._values = [];
        }
        Object.defineProperty(Repository.prototype, "values", {
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        Repository.prototype.add = function (value) {
            this._values.push(value);
        };
        Repository.prototype.remove = function (value) {
            this._values.splice(this._values.indexOf(value), 1);
        };
        return Repository;
    }());
    var Test = /** @class */ (function () {
        function Test(title) {
            this.title = title;
        }
        return Test;
    }());
    var repository = new Repository();
    repository.add(new Test("first"));
    repository.add(new Test("second"));
    for (var _i = 0, _a = repository.values; _i < _a.length; _i++) {
        var value = _a[_i];
        console.log(value.title);
    }
})(Repository || (Repository = {}));
//# sourceMappingURL=app.js.map