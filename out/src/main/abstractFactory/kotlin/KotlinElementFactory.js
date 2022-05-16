"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KotlinElementFactory = void 0;
var KotlinButton_1 = require("./KotlinButton");
var KotlinInput_1 = require("./KotlinInput");
var KotlinElementFactory = /** @class */ (function () {
    function KotlinElementFactory() {
    }
    KotlinElementFactory.prototype.button = function () {
        return new KotlinButton_1.KotlinButton();
    };
    KotlinElementFactory.prototype.input = function () {
        return new KotlinInput_1.KotlinInput();
    };
    return KotlinElementFactory;
}());
exports.KotlinElementFactory = KotlinElementFactory;
//# sourceMappingURL=KotlinElementFactory.js.map