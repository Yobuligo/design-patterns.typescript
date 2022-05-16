"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElementFactoryTester_1 = require("./ElementFactoryTester");
var HTMLElementFactory_1 = require("./html/HTMLElementFactory");
var KotlinElementFactory_1 = require("./kotlin/KotlinElementFactory");
new ElementFactoryTester_1.ElementFactoryTester(new HTMLElementFactory_1.HTMLElementFactory()).test();
new ElementFactoryTester_1.ElementFactoryTester(new KotlinElementFactory_1.KotlinElementFactory()).test();
//# sourceMappingURL=app.js.map