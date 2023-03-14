"use strict";
var GameLoop;
(function (GameLoop) {
    var Game = /** @class */ (function () {
        function Game() {
            this.components = [];
        }
        Game.prototype.addComponent = function (component) {
            this.components.push(component);
        };
        Game.prototype.run = function () {
            console.log(" ");
            // actually while(true)
            for (var i = 0; i < 2; i++) {
                this.update();
                this.render();
            }
        };
        Game.prototype.update = function () {
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.update();
            }
        };
        Game.prototype.render = function () {
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.render();
            }
        };
        return Game;
    }());
    var ComponentA = /** @class */ (function () {
        function ComponentA(name) {
            this.name = name;
            this.value = 0;
        }
        ComponentA.prototype.render = function () {
            console.log("Render component '".concat(this.name, "', new value is '").concat(this.value, "'"));
        };
        ComponentA.prototype.update = function () {
            this.value++;
        };
        return ComponentA;
    }());
    var game = new Game();
    game.addComponent(new ComponentA("button"));
    game.addComponent(new ComponentA("table"));
    game.addComponent(new ComponentA("input"));
    game.run();
})(GameLoop || (GameLoop = {}));
//# sourceMappingURL=app.js.map