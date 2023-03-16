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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Visitor;
(function (Visitor_1) {
    var Visitor = /** @class */ (function () {
        function Visitor() {
        }
        Visitor.prototype.visitButton = function (button) {
            console.log("Visit button with caption '".concat(button.caption, "'"));
        };
        Visitor.prototype.visitInput = function (input) {
            console.log("Visit input with value '".concat(input.value, "'"));
        };
        Visitor.prototype.visitFrame = function (frame) {
            console.log("Visit frame with title '".concat(frame.title, "'"));
        };
        return Visitor;
    }());
    var Component = /** @class */ (function () {
        function Component() {
            this._components = [];
        }
        Component.prototype.addComponent = function (component) {
            this._components.push(component);
        };
        Object.defineProperty(Component.prototype, "components", {
            get: function () {
                return this._components;
            },
            enumerable: false,
            configurable: true
        });
        return Component;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.caption = "Button caption";
            return _this;
        }
        Button.prototype.accept = function (visitor) {
            visitor.visitButton(this);
        };
        return Button;
    }(Component));
    var Input = /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.value = "Input value";
            return _this;
        }
        Input.prototype.accept = function (visitor) {
            visitor.visitInput(this);
        };
        return Input;
    }(Component));
    var Frame = /** @class */ (function (_super) {
        __extends(Frame, _super);
        function Frame() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = "Frame title";
            return _this;
        }
        Frame.prototype.accept = function (visitor) {
            visitor.visitFrame(this);
        };
        return Frame;
    }(Component));
    var frame = new Frame();
    frame.addComponent(new Button());
    frame.addComponent(new Input());
    var visitor = new Visitor();
    for (var _i = 0, _a = __spreadArray([frame], frame.components, true); _i < _a.length; _i++) {
        var component = _a[_i];
        component.accept(visitor);
    }
})(Visitor || (Visitor = {}));
//# sourceMappingURL=app.js.map