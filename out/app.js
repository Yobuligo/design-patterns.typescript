"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Println_1 = require("./src/main/core/Println");
var AudiFactory_1 = require("./src/main/factory/AudiFactory");
var carFactory = new AudiFactory_1.AudiFactory();
var car = carFactory.create();
(0, Println_1.println)(car.name);
//# sourceMappingURL=app.js.map