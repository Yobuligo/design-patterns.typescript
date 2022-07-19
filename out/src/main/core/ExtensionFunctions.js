"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repeat_1 = require("./Repeat");
Array.prototype.apply = function (block) {
    block(this);
    return this;
};
String.prototype.ifNotEmpty = function (block) {
    if (this != "") {
        block(this);
    }
};
String.prototype.repeat = function (times) {
    var _this = this;
    switch (times) {
        case 0:
            return "";
        case 1:
            return this;
        default: {
            var result_1 = "";
            (0, Repeat_1.repeat)(times, function () {
                result_1 += _this;
            });
            return result_1;
        }
    }
};
Boolean.prototype.ifTrue = function (block) {
    if (this) {
        block();
    }
};
Boolean.prototype.ifFalse = function (block) {
    if (!this) {
        block();
    }
};
//# sourceMappingURL=ExtensionFunctions.js.map