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
var State;
(function (State_1) {
    var State = /** @class */ (function () {
        function State(hoover) {
            this.hoover = hoover;
        }
        return State;
    }());
    var Carpet = /** @class */ (function (_super) {
        __extends(Carpet, _super);
        function Carpet(hoover) {
            var _this = _super.call(this, hoover) || this;
            hoover.power = 1000;
            hoover.useWipe = false;
            return _this;
        }
        Carpet.prototype.onCarpet = function () {
            console.log("Already in Carpet mode");
        };
        Carpet.prototype.onTile = function () {
            this.hoover.state = new Tile(this.hoover);
        };
        return Carpet;
    }(State));
    var Tile = /** @class */ (function (_super) {
        __extends(Tile, _super);
        function Tile(hoover) {
            var _this = _super.call(this, hoover) || this;
            hoover.power = 500;
            hoover.useWipe = true;
            return _this;
        }
        Tile.prototype.onCarpet = function () {
            this.hoover.state = new Carpet(this.hoover);
        };
        Tile.prototype.onTile = function () {
            console.log("Already in Tile mode");
        };
        return Tile;
    }(State));
    var Hoover = /** @class */ (function () {
        function Hoover() {
            this.power = 0;
            this.useWipe = false;
            this.state = new Carpet(this);
        }
        Hoover.prototype.onCarpet = function () {
            console.log("Carpet detected, switch to carpet mode");
            this.state.onCarpet();
            this.print();
        };
        Hoover.prototype.onTile = function () {
            console.log("Tiles detected, switch to tile mode");
            this.state.onTile();
            this.print();
        };
        Hoover.prototype.print = function () {
            console.log("Hoover works now with '".concat(sensor.power, "' W and wipe is '").concat(sensor.useWipe ? "on" : "off", "'"));
        };
        return Hoover;
    }());
    var sensor = new Hoover();
    sensor.onCarpet();
    sensor.onTile();
})(State || (State = {}));
//# sourceMappingURL=app.js.map