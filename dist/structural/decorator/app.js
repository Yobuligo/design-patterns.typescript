"use strict";
var Decorator;
(function (Decorator) {
    var Article = /** @class */ (function () {
        function Article(name, price) {
            this.name = name;
            this.price = price;
        }
        return Article;
    }());
    var FoodTax = /** @class */ (function () {
        function FoodTax(article) {
            this.article = article;
        }
        Object.defineProperty(FoodTax.prototype, "name", {
            get: function () {
                return this.article.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FoodTax.prototype, "price", {
            get: function () {
                return this.article.price * 1.07;
            },
            enumerable: false,
            configurable: true
        });
        return FoodTax;
    }());
    var ValueTax = /** @class */ (function () {
        function ValueTax(article) {
            this.article = article;
        }
        Object.defineProperty(ValueTax.prototype, "name", {
            get: function () {
                return this.article.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ValueTax.prototype, "price", {
            get: function () {
                return this.article.price * 1.19;
            },
            enumerable: false,
            configurable: true
        });
        return ValueTax;
    }());
    var displayArticle = function (article, tax) {
        console.log("Price of a '".concat(article.name, "' with tax '").concat(tax.price.toFixed(2), "', before '").concat(article.price.toFixed(2), "'"));
    };
    var steak = new Article("Steak", 3);
    var pen = new Article("Pen", 3);
    var foodTax = new FoodTax(steak);
    var valueTax = new ValueTax(pen);
    displayArticle(steak, foodTax);
    displayArticle(pen, valueTax);
})(Decorator || (Decorator = {}));
//# sourceMappingURL=app.js.map