"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiFactory = void 0;
var Audi_1 = require("./Audi");
var AudiFactory = /** @class */ (function () {
    function AudiFactory() {
    }
    AudiFactory.prototype.create = function () {
        return new Audi_1.Audi();
    };
    return AudiFactory;
}());
exports.AudiFactory = AudiFactory;
//# sourceMappingURL=AudiFactory.js.map