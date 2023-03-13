"use strict";
var Command;
(function (Command) {
    var Addition = /** @class */ (function () {
        function Addition() {
        }
        Addition.prototype.execute = function () {
            console.log("Addition was called");
        };
        return Addition;
    }());
    var Subtraction = /** @class */ (function () {
        function Subtraction() {
        }
        Subtraction.prototype.execute = function () {
            console.log("Subtraction was called");
        };
        return Subtraction;
    }());
    var Button = /** @class */ (function () {
        function Button() {
        }
        Button.prototype.onClick = function () {
            var _a;
            (_a = this.command) === null || _a === void 0 ? void 0 : _a.execute();
        };
        return Button;
    }());
    var button = new Button();
    button.command = new Addition();
    button.onClick();
    button.command = new Subtraction();
    button.onClick();
})(Command || (Command = {}));
//# sourceMappingURL=app.js.map