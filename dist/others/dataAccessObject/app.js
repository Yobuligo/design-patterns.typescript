"use strict";
var DataAccessObject;
(function (DataAccessObject_1) {
    var DataObject = /** @class */ (function () {
        function DataObject(id, value) {
            this.id = id;
            this.value = value;
        }
        return DataObject;
    }());
    var DataAccessObject = /** @class */ (function () {
        function DataAccessObject() {
            this.dataObjects = [];
        }
        DataAccessObject.prototype.findById = function (id) {
            return this.dataObjects.find(function (dataObject) { return dataObject.id === id; });
        };
        DataAccessObject.prototype.remove = function (dataObject) {
            var index = this.dataObjects.indexOf(dataObject);
            return this.dataObjects.splice(index, 1) !== undefined;
        };
        DataAccessObject.prototype.save = function (dataObject) {
            this.dataObjects.push(dataObject);
        };
        return DataAccessObject;
    }());
    var dataAccessObject = new DataAccessObject();
    dataAccessObject.save(new DataObject("1", "first"));
    dataAccessObject.save(new DataObject("2", "second"));
    var dataObject = dataAccessObject.findById("1");
    console.log(dataObject);
    if (dataObject) {
        dataAccessObject.remove(dataObject);
        console.log(dataAccessObject.findById("1"));
    }
})(DataAccessObject || (DataAccessObject = {}));
//# sourceMappingURL=app.js.map