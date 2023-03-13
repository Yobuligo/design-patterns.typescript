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
var ServiceProvider;
(function (ServiceProvider_1) {
    var _a;
    var ServiceDefinition = /** @class */ (function () {
        function ServiceDefinition() {
            this._instance = {};
        }
        return ServiceDefinition;
    }());
    var ServiceProvider = /** @class */ (function () {
        function ServiceProvider() {
            this.services = new Map();
        }
        ServiceProvider.prototype.fetch = function (serviceDefinition) {
            return this.services.get(serviceDefinition);
        };
        ServiceProvider.prototype.set = function (serviceDefinition, service) {
            this.services.set(serviceDefinition, service);
        };
        return ServiceProvider;
    }());
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.prototype.create = function (type) {
            return new type();
        };
        return Factory;
    }());
    var FactoryService = /** @class */ (function (_super) {
        __extends(FactoryService, _super);
        function FactoryService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FactoryService;
    }(ServiceDefinition));
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var serviceProvider = new ServiceProvider();
    serviceProvider.set(FactoryService, new Factory());
    (_a = serviceProvider.fetch(FactoryService)) === null || _a === void 0 ? void 0 : _a.create(Person);
})(ServiceProvider || (ServiceProvider = {}));
//# sourceMappingURL=app.js.map