"use strict";
var Mediator;
(function (Mediator) {
    var Button = /** @class */ (function () {
        function Button() {
            this._enabled = true;
        }
        Object.defineProperty(Button.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
                console.log("Button was '".concat(this._enabled ? "enabled" : "disabled", "'"));
            },
            enumerable: false,
            configurable: true
        });
        return Button;
    }());
    var Input = /** @class */ (function () {
        function Input() {
            this.onChangeHandler = [];
            this._value = "";
        }
        Object.defineProperty(Input.prototype, "value", {
            set: function (value) {
                var _this = this;
                if (this._value === value) {
                    return;
                }
                this._value = value;
                this.onChangeHandler.forEach(function (handler) { return handler(_this._value); });
            },
            enumerable: false,
            configurable: true
        });
        Input.prototype.onChange = function (handler) {
            this.onChangeHandler.push(handler);
        };
        return Input;
    }());
    /**
     * Dialog is the mediator that takes over the controlling of the components (here button and input)
     * without the need that these components need each other.
     * It contains the business logic.
     */
    var Dialog = /** @class */ (function () {
        function Dialog() {
            var _this = this;
            this.button = new Button();
            this.input = new Input();
            this.onInputValueChangeHandler = function (value) {
                _this.button.enabled = value.includes("@");
            };
            this.input.onChange(this.onInputValueChangeHandler);
        }
        Dialog.prototype.enterInputValue = function (value) {
            this.input.value = value;
        };
        return Dialog;
    }());
    var dialog = new Dialog();
    dialog.enterInputValue("test");
    dialog.enterInputValue("mediator@test.com");
})(Mediator || (Mediator = {}));
//# sourceMappingURL=app.js.map