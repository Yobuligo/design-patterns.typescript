"use strict";
var Builder;
(function (Builder) {
    var Color;
    (function (Color) {
        Color[Color["black"] = 0] = "black";
        Color[Color["red"] = 1] = "red";
        Color[Color["white"] = 2] = "white";
        Color[Color["yellow"] = 3] = "yellow";
    })(Color || (Color = {}));
    var Light;
    (function (Light) {
        Light[Light["Xenon"] = 0] = "Xenon";
        Light[Light["LED"] = 1] = "LED";
    })(Light || (Light = {}));
    var Car = /** @class */ (function () {
        function Car(color, engine, light, model) {
            this.color = color;
            this.engine = engine;
            this.light = light;
            this.model = model;
        }
        return Car;
    }());
    var BMW = /** @class */ (function () {
        function BMW() {
            this.name = BMW.name;
        }
        return BMW;
    }());
    var Mercedes = /** @class */ (function () {
        function Mercedes() {
            this.name = Mercedes.name;
        }
        return Mercedes;
    }());
    var Porsche = /** @class */ (function () {
        function Porsche() {
            this.name = Porsche.name;
        }
        return Porsche;
    }());
    var EEngine = /** @class */ (function () {
        function EEngine() {
            this.name = "E-Engine";
            this.power = 200;
        }
        return EEngine;
    }());
    var DieselEngine = /** @class */ (function () {
        function DieselEngine() {
            this.name = "Diesel Engine ";
            this.power = 400;
        }
        return DieselEngine;
    }());
    var CarBuilder = /** @class */ (function () {
        function CarBuilder(model) {
            this.model = model;
            this.color = Color.white;
            this.engine = new DieselEngine();
            this.light = Light.Xenon;
        }
        CarBuilder.prototype.setColor = function (color) {
            this.color = color;
            return this;
        };
        CarBuilder.prototype.setEngine = function (engine) {
            this.engine = engine;
            return this;
        };
        CarBuilder.prototype.setLight = function (light) {
            this.light = light;
            return this;
        };
        CarBuilder.prototype.setModel = function (model) {
            this.model = model;
            return this;
        };
        CarBuilder.prototype.build = function () {
            return new Car(this.color, this.engine, this.light, this.model);
        };
        return CarBuilder;
    }());
    var carBuilder = new CarBuilder(new Porsche());
    var car = carBuilder
        .setEngine(new EEngine())
        .setColor(Color.black)
        .setLight(Light.LED)
        .build();
    console.log("The created car is a '".concat(car.model.name, "' in '").concat(Color[car.color], "'. It has an '").concat(car.engine.name, "' with '").concat(car.engine.power, "' PS and '").concat(Light[car.light], "' light"));
})(Builder || (Builder = {}));
//# sourceMappingURL=app.js.map