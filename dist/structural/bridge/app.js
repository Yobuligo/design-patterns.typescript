"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bridge;
(function (Bridge) {
    var Phone = /** @class */ (function () {
        function Phone() {
        }
        Phone.prototype.callNumber = function (phoneNumber) {
            console.log("Call number ".concat(phoneNumber));
        };
        return Phone;
    }());
    var Camera = /** @class */ (function () {
        function Camera() {
        }
        Camera.prototype.makePicture = function () {
            console.log("Make picture");
        };
        return Camera;
    }());
    var Smartphone = /** @class */ (function (_super) {
        __extends(Smartphone, _super);
        function Smartphone() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.camera = new Camera();
            return _this;
        }
        Smartphone.prototype.makePicture = function () {
            this.camera.makePicture();
        };
        return Smartphone;
    }(Phone));
    var smartPhone = new Smartphone();
    smartPhone.callNumber("+49 151 123456789");
    smartPhone.makePicture();
})(Bridge || (Bridge = {}));
//# sourceMappingURL=app.js.map