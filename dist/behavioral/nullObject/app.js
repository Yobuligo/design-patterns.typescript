"use strict";
var NullObject;
(function (NullObject) {
    var NullObjectAction = /** @class */ (function () {
        function NullObjectAction() {
        }
        NullObjectAction.prototype.execute = function () {
            console.log("Null object does nothing.");
        };
        return NullObjectAction;
    }());
    var Action = /** @class */ (function () {
        function Action() {
        }
        Action.prototype.execute = function () {
            console.log("Concrete object does something");
        };
        return Action;
    }());
    var Service = /** @class */ (function () {
        function Service() {
            this.action = new NullObjectAction();
        }
        Service.prototype.execute = function () {
            this.action.execute();
        };
        return Service;
    }());
    var service = new Service();
    service.execute();
    service.action = new Action();
    service.execute();
})(NullObject || (NullObject = {}));
//# sourceMappingURL=app.js.map