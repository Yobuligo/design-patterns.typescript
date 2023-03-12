"use strict";
var Factory;
(function (Factory_1) {
    var Product = /** @class */ (function () {
        function Product(title) {
            this.title = title;
        }
        return Product;
    }());
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.prototype.create = function (title) {
            return new Product(title);
        };
        return Factory;
    }());
    var factory = new Factory();
    var product = factory.create("First Product");
    console.log("Product is '".concat(product.title, "'"));
})(Factory || (Factory = {}));
//# sourceMappingURL=app.js.map