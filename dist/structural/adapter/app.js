"use strict";
var Adapter;
(function (Adapter) {
    /**
     * Imagine this class cannot be extended. But we want to use it by using the remote control
     */
    var Fan = /** @class */ (function () {
        function Fan() {
        }
        Fan.prototype.start = function () {
            console.log("Start the Fan");
        };
        Fan.prototype.stop = function () {
            console.log("Stop the Fan");
        };
        return Fan;
    }());
    var FanAdapter = /** @class */ (function () {
        function FanAdapter(fan) {
            this.fan = fan;
        }
        FanAdapter.prototype.on = function () {
            this.fan.start();
        };
        FanAdapter.prototype.off = function () {
            this.fan.stop();
        };
        return FanAdapter;
    }());
    var remoteControl = new FanAdapter(new Fan());
    remoteControl.on();
    remoteControl.off();
})(Adapter || (Adapter = {}));
//# sourceMappingURL=app.js.map