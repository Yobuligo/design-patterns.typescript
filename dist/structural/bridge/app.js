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
/**
 * There are 2 abstract classes, which should be extended to provide more functionality.
 * These classes should be implemented independently while one should use the other one.
 */
var Bridge;
(function (Bridge) {
    var Sword = /** @class */ (function () {
        function Sword() {
        }
        Sword.prototype.attack = function () {
            console.log("with sword Jato");
        };
        return Sword;
    }());
    var Bow = /** @class */ (function () {
        function Bow() {
        }
        Bow.prototype.attack = function () {
            console.log("with bow Apollo");
        };
        return Bow;
    }());
    var Specialization = /** @class */ (function () {
        function Specialization(weapon) {
            this.weapon = weapon;
        }
        Specialization.prototype.attack = function () {
            console.log("The ".concat(this.constructor.name, " attacks:"));
            this.weapon.attack();
        };
        return Specialization;
    }());
    var Warrior = /** @class */ (function (_super) {
        __extends(Warrior, _super);
        function Warrior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Warrior;
    }(Specialization));
    var Mage = /** @class */ (function (_super) {
        __extends(Mage, _super);
        function Mage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Mage;
    }(Specialization));
    var warrior = new Warrior(new Bow());
    warrior.attack();
    warrior.weapon = new Sword();
    warrior.attack();
    var mage = new Mage(new Bow());
    mage.attack();
})(Bridge || (Bridge = {}));
//# sourceMappingURL=app.js.map