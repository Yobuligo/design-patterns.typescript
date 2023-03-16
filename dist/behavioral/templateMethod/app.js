"use strict";
var TemplateMethod;
(function (TemplateMethod) {
    var Selector = /** @class */ (function () {
        function Selector() {
        }
        Selector.prototype.selectData = function () {
            return "my data";
        };
        return Selector;
    }());
    var Converter = /** @class */ (function () {
        function Converter() {
        }
        Converter.prototype.convertData = function (data) {
            var result = "";
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var char = data_1[_i];
                if (result === "") {
                    result = char;
                }
                else {
                    result += " ".concat(char);
                }
            }
            return result;
        };
        return Converter;
    }());
    var Inserter = /** @class */ (function () {
        function Inserter() {
        }
        Inserter.prototype.insert = function (data) {
            console.log("Inserted data '".concat(data, "'"));
        };
        return Inserter;
    }());
    var TemplateProcessor = /** @class */ (function () {
        function TemplateProcessor(selector, converter, inserter) {
            this.selector = selector;
            this.converter = converter;
            this.inserter = inserter;
        }
        TemplateProcessor.prototype.executeTemplate = function () {
            var data = this.selectData();
            console.log("1. select data '".concat(data, "'"));
            var convertedData = this.convertData(data);
            console.log("2. Convert data '".concat(convertedData, "'"));
            console.log("3. Insert data");
            this.insertData(convertedData);
        };
        TemplateProcessor.prototype.selectData = function () {
            return this.selector.selectData();
        };
        TemplateProcessor.prototype.convertData = function (data) {
            return this.converter.convertData(data);
        };
        TemplateProcessor.prototype.insertData = function (data) {
            this.inserter.insert(data);
        };
        return TemplateProcessor;
    }());
    var templateProcessor = new TemplateProcessor(new Selector(), new Converter(), new Inserter());
    templateProcessor.executeTemplate();
})(TemplateMethod || (TemplateMethod = {}));
//# sourceMappingURL=app.js.map