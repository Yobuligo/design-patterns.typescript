"use strict";
var AbstractFactory;
(function (AbstractFactory) {
    var ABAPButton = /** @class */ (function () {
        function ABAPButton() {
            this.name = "ABAP Button";
        }
        return ABAPButton;
    }());
    var ABAPInput = /** @class */ (function () {
        function ABAPInput() {
            this.name = "ABAP Input";
        }
        return ABAPInput;
    }());
    var ABAPTable = /** @class */ (function () {
        function ABAPTable() {
            this.name = "ABAP Table";
        }
        return ABAPTable;
    }());
    var HTMLButton = /** @class */ (function () {
        function HTMLButton() {
            this.name = "HTML Button";
        }
        return HTMLButton;
    }());
    var HTMLInput = /** @class */ (function () {
        function HTMLInput() {
            this.name = "HTML Input";
        }
        return HTMLInput;
    }());
    var HTMLTable = /** @class */ (function () {
        function HTMLTable() {
            this.name = "HTML Table";
        }
        return HTMLTable;
    }());
    var ABAPFactory = /** @class */ (function () {
        function ABAPFactory() {
        }
        ABAPFactory.prototype.createButton = function () {
            return new ABAPButton();
        };
        ABAPFactory.prototype.createInput = function () {
            return new ABAPInput();
        };
        ABAPFactory.prototype.createTable = function () {
            return new ABAPTable();
        };
        return ABAPFactory;
    }());
    var HTMLFactory = /** @class */ (function () {
        function HTMLFactory() {
        }
        HTMLFactory.prototype.createButton = function () {
            return new HTMLButton();
        };
        HTMLFactory.prototype.createInput = function () {
            return new HTMLInput();
        };
        HTMLFactory.prototype.createTable = function () {
            return new HTMLTable();
        };
        return HTMLFactory;
    }());
    var testFactory = function (abstractFactory) {
        console.log(abstractFactory.createButton().name);
        console.log(abstractFactory.createInput().name);
        console.log(abstractFactory.createTable().name);
    };
    testFactory(new ABAPFactory());
    testFactory(new HTMLFactory());
})(AbstractFactory || (AbstractFactory = {}));
//# sourceMappingURL=app.js.map