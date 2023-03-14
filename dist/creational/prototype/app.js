"use strict";
var Prototype;
(function (Prototype) {
    var Cell = /** @class */ (function () {
        function Cell(dna, cloneCycles) {
            this.dna = dna;
            this.cloneCycles = cloneCycles;
        }
        Cell.prototype.clone = function () {
            if (this.cloneCycles === 0) {
                throw new Error("Cell with cell code '".concat(this.cellCode, "' is not cloneable anymore."));
            }
            var cell = new Cell(this.dna, this.cloneCycles - 1);
            cell._cellCode = this.cellCode;
            return cell;
        };
        Object.defineProperty(Cell.prototype, "cellCode", {
            get: function () {
                if (!this._cellCode) {
                    this._cellCode = new Date().getTime() * Math.random() * 10000;
                }
                return this._cellCode;
            },
            enumerable: false,
            configurable: true
        });
        return Cell;
    }());
    var cloneCell = function (cell) {
        cell = cell.clone();
        console.log("I am cell with cell code '".concat(cell.cellCode, "', dna '").concat(cell.dna, "' and can be cloned '").concat(cell.cloneCycles, "' times."));
        return cell;
    };
    try {
        var cell = new Cell("6712376", 3);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
        cell = cloneCell(cell);
    }
    catch (error) {
        console.log(error.message);
    }
    var cancer = new Cell("6712376", 3);
    cloneCell(cancer);
})(Prototype || (Prototype = {}));
//# sourceMappingURL=app.js.map