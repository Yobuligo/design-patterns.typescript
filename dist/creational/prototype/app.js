"use strict";
var Prototype;
(function (Prototype) {
    var Cell = /** @class */ (function () {
        function Cell(cloneCycles) {
            this.cloneCycles = cloneCycles;
            this._name = "Alfred";
        }
        Cell.prototype.clone = function () {
            if (this.cloneCycles === 0) {
                throw new Error("Cell is not cloneable anymore.");
            }
            var cell = new Cell(this.cloneCycles - 1);
            cell._name = this._name;
            return cell;
        };
        Object.defineProperty(Cell.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        return Cell;
    }());
    var cloneCell = function (cell) {
        cell = cell.clone();
        console.log("I am the cell '".concat(cell.name, "' and can be cloned '").concat(cell.cloneCycles, "' times more."));
        return cell;
    };
    try {
        var cell = new Cell(3);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
    }
    catch (error) {
        console.log(error.message);
    }
})(Prototype || (Prototype = {}));
//# sourceMappingURL=app.js.map