"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElementFactory = void 0;
var HTMLButton_1 = require("./HTMLButton");
var HTMLInput_1 = require("./HTMLInput");
var HTMLElementFactory = /** @class */ (function () {
    function HTMLElementFactory() {
    }
    HTMLElementFactory.prototype.button = function () {
        return new HTMLButton_1.HTMLButton();
    };
    HTMLElementFactory.prototype.input = function () {
        return new HTMLInput_1.HTMLInput();
    };
    return HTMLElementFactory;
}());
exports.HTMLElementFactory = HTMLElementFactory;
//# sourceMappingURL=HTMLElementFactory.js.map