"use strict";
var Observer;
(function (Observer_1) {
    var Observable = /** @class */ (function () {
        function Observable() {
            this.observers = [];
        }
        Observable.prototype.add = function (observer) {
            this.observers.push(observer);
        };
        Observable.prototype.notify = function () {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update();
            }
        };
        return Observable;
    }());
    var Observer = /** @class */ (function () {
        function Observer(title) {
            this.title = title;
        }
        Observer.prototype.update = function () {
            console.log("I observer '".concat(this.title, "' was updated"));
        };
        return Observer;
    }());
    var observable = new Observable();
    observable.add(new Observer("first"));
    observable.add(new Observer("second"));
    observable.notify();
})(Observer || (Observer = {}));
//# sourceMappingURL=app.js.map