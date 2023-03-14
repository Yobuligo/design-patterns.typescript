"use strict";
var Strategy;
(function (Strategy) {
    var BasePrinter = /** @class */ (function () {
        function BasePrinter() {
        }
        BasePrinter.prototype.print = function (message) {
            console.log(message);
        };
        return BasePrinter;
    }());
    var SpacePrinter = /** @class */ (function () {
        function SpacePrinter() {
        }
        SpacePrinter.prototype.print = function (message) {
            console.log(this.convertMessage(message));
        };
        SpacePrinter.prototype.convertMessage = function (message) {
            var result = "";
            for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
                var char = message_1[_i];
                if (result === "") {
                    result = char;
                }
                else {
                    result += " ".concat(char);
                }
            }
            return result;
        };
        return SpacePrinter;
    }());
    var TextOutput = /** @class */ (function () {
        function TextOutput(printer) {
            this.printer = printer;
        }
        TextOutput.prototype.print = function (message) {
            this.printer.print(message);
        };
        return TextOutput;
    }());
    var textOutput = new TextOutput(new BasePrinter());
    textOutput.print("Test message");
    textOutput.printer = new SpacePrinter();
    textOutput.print("Test message");
})(Strategy || (Strategy = {}));
//# sourceMappingURL=app.js.map