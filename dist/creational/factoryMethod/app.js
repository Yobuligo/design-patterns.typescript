"use strict";
var FactoryMethod;
(function (FactoryMethod) {
    var Product = /** @class */ (function () {
        function Product(title) {
            this.title = title;
        }
        return Product;
    }());
    var Creator = /** @class */ (function () {
        function Creator() {
        }
        Creator.prototype.create = function (title) {
            return new Product(title);
        };
        Creator.prototype.doSomething = function () {
            console.log("has some business logic and creates specific objects.");
        };
        return Creator;
    }());
    var creator = new Creator();
    var product = creator.create("New Product");
    console.log("Created product was '".concat(product.title, "'"));
})(FactoryMethod || (FactoryMethod = {}));
//# sourceMappingURL=app.js.map