"use strict";
var ProxyPattern;
(function (ProxyPattern) {
    var DataProvider = /** @class */ (function () {
        function DataProvider(data) {
            this.data = data;
        }
        return DataProvider;
    }());
    var ProxyDataProvider = /** @class */ (function () {
        function ProxyDataProvider(dataProvider, secret) {
            this.dataProvider = dataProvider;
            this.secret = secret;
            this.loggedIn = false;
        }
        ProxyDataProvider.prototype.login = function (secret) {
            this.loggedIn = secret === this.secret;
        };
        Object.defineProperty(ProxyDataProvider.prototype, "data", {
            get: function () {
                if (this.loggedIn) {
                    return this.dataProvider.data;
                }
                else {
                    return "";
                }
            },
            enumerable: false,
            configurable: true
        });
        return ProxyDataProvider;
    }());
    var dataProvider = new ProxyDataProvider(new DataProvider("my secret data"), "mySecret");
    console.log(dataProvider.data);
    dataProvider.login("mySecret");
    console.log(dataProvider.data);
})(ProxyPattern || (ProxyPattern = {}));
//# sourceMappingURL=app.js.map