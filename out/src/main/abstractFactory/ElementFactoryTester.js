"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementFactoryTester = void 0;
var Println_1 = require("../core/Println");
var ElementFactoryTester = /** @class */ (function () {
    function ElementFactoryTester(elementFactory) {
        this.elementFactory = elementFactory;
    }
    ElementFactoryTester.prototype.test = function () {
        var button = this.elementFactory.button();
        (0, Println_1.println)("Created the button: ".concat(button.name));
        var input = this.elementFactory.input();
        (0, Println_1.println)("Created the input: ".concat(input.name));
    };
    return ElementFactoryTester;
}());
exports.ElementFactoryTester = ElementFactoryTester;
//# sourceMappingURL=ElementFactoryTester.js.map