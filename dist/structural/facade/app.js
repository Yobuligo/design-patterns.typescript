"use strict";
var Facade;
(function (Facade) {
    var DBConnector = /** @class */ (function () {
        function DBConnector() {
        }
        DBConnector.prototype.fetchData = function () {
            console.log("I am responsible for fetching data from the data base");
            return "my Data";
        };
        DBConnector.prototype.save = function (data) {
            console.log("I am responsible for saving data to the data base");
        };
        return DBConnector;
    }());
    var DataConverter = /** @class */ (function () {
        function DataConverter() {
        }
        DataConverter.prototype.toObjects = function (data) {
            console.log("I am responsible for converting data to objects");
            return [];
        };
        return DataConverter;
    }());
    var ObjectConverter = /** @class */ (function () {
        function ObjectConverter() {
        }
        ObjectConverter.prototype.toData = function (objects) {
            console.log("I am responsible for converting objects to a data format");
        };
        return ObjectConverter;
    }());
    var ObjectCache = /** @class */ (function () {
        function ObjectCache() {
        }
        ObjectCache.prototype.cache = function (object) {
            console.log("I am responsible for caching objects");
        };
        return ObjectCache;
    }());
    var ORMFacade = /** @class */ (function () {
        function ORMFacade() {
            this.dbConnector = new DBConnector();
            this.objectConverter = new ObjectConverter();
            this.objectCache = new ObjectCache();
            this.dataConverter = new DataConverter();
        }
        return ORMFacade;
    }());
    var ormFacade = new ORMFacade();
    var data = ormFacade.dbConnector.fetchData();
    var objects = ormFacade.dataConverter.toObjects(data);
    ormFacade.objectCache.cache(objects);
    var newData = ormFacade.objectConverter.toData(objects);
    ormFacade.dbConnector.save(newData);
})(Facade || (Facade = {}));
//# sourceMappingURL=app.js.map