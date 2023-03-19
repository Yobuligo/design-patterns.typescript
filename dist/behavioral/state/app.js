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
        function State(sensor) {
            this.sensor = sensor;
        }
        return State;
    }());
    var Carpet = /** @class */ (function (_super) {
        __extends(Carpet, _super);
        function Carpet(sensor) {
            var _this = _super.call(this, sensor) || this;
            sensor.hoover.power = 1000;
            sensor.hoover.useWipe = false;
            return _this;
        }
        Carpet.prototype.onCarpet = function () {
            console.log("Already in Carpet mode");
        };
        Carpet.prototype.onTile = function () {
            this.sensor.state = new Tile(this.sensor);
        };
        return Carpet;
    }(State));
    var Tile = /** @class */ (function (_super) {
        __extends(Tile, _super);
        function Tile(sensor) {
            var _this = _super.call(this, sensor) || this;
            sensor.hoover.power = 500;
            sensor.hoover.useWipe = true;
            return _this;
        }
        Tile.prototype.onCarpet = function () {
            this.sensor.state = new Carpet(this.sensor);
        };
        Tile.prototype.onTile = function () {
            console.log("Already in Tile mode");
        };
        return Tile;
    }(State));
    var Sensor = /** @class */ (function () {
        function Sensor(hoover) {
            this.hoover = hoover;
            this.state = new Carpet(this);
        }
        Sensor.prototype.onCarpet = function () {
            console.log("Switch to carpet mode");
            this.state.onCarpet();
        };
        Sensor.prototype.onTile = function () {
            console.log("Switch to tile mode");
            this.state.onTile();
        };
        return Sensor;
    }());
    var Hoover = /** @class */ (function () {
        function Hoover() {
            this.power = 0;
            this.useWipe = false;
        }
        return Hoover;
    }());
    var printHoover = function (hoover) {
        console.log("Hoover works now with '".concat(hoover.power, "' W and wipe is '").concat(hoover.useWipe ? "on" : "off", "'"));
    };
    var hoover = new Hoover();
    var sensor = new Sensor(hoover);
    printHoover(hoover);
    sensor.onCarpet();
    printHoover(hoover);
    sensor.onTile();
    printHoover(hoover);
})(State || (State = {}));
//# sourceMappingURL=app.js.map