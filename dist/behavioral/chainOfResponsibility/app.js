"use strict";
var ChainOfResponsibility;
(function (ChainOfResponsibility) {
    var Request = /** @class */ (function () {
        function Request(operation, value1, value2) {
            this.operation = operation;
            this.value1 = value1;
            this.value2 = value2;
        }
        return Request;
    }());
    var Addition = /** @class */ (function () {
        function Addition(follower) {
            this.follower = follower;
        }
        Addition.prototype.handle = function (request) {
            if (request.operation === "+") {
                return request.value1 + request.value2;
            }
            if (this.follower) {
                return this.follower.handle(request);
            }
        };
        return Addition;
    }());
    var Subtraction = /** @class */ (function () {
        function Subtraction(follower) {
            this.follower = follower;
        }
        Subtraction.prototype.handle = function (request) {
            if (request.operation === "-") {
                return request.value1 - request.value2;
            }
            if (this.follower) {
                return this.follower.handle(request);
            }
        };
        return Subtraction;
    }());
    var Handler = /** @class */ (function () {
        function Handler() {
            this.follower = new Addition(new Subtraction(undefined));
        }
        Handler.prototype.handle = function (request) {
            var _a;
            return (_a = this.follower) === null || _a === void 0 ? void 0 : _a.handle(request);
        };
        return Handler;
    }());
    var handler = new Handler();
    console.log(handler.handle(new Request("+", 7, 3)));
    console.log(handler.handle(new Request("-", 7, 3)));
    console.log(handler.handle(new Request("*", 7, 3)));
})(ChainOfResponsibility || (ChainOfResponsibility = {}));
//# sourceMappingURL=app.js.map