"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Println_1 = require("../core/Println");
var Iterator_1 = require("./Iterator");
var Folder = /** @class */ (function () {
    function Folder(name) {
        this.name = name;
        this.children = [];
    }
    Folder.prototype.addChild = function (child) {
        this.children.push(child);
        return this;
    };
    Folder.prototype.getChildren = function () {
        return this.children;
    };
    return Folder;
}());
function folder(name) {
    return new Folder(name);
}
var myFolder = folder("1")
    .addChild(folder("1.1")
    .addChild(folder("1.1.1"))
    .addChild(folder("1.1.2"))
    .addChild(folder("1.1.3").addChild(folder("1.1.3.1")).addChild(folder("1.1.3.2")))
    .addChild(folder("1.1.4")))
    .addChild(folder("1.2").addChild(folder("1.2.1")).addChild(folder("1.2.2")));
var iterator = new Iterator_1.Iterator(myFolder);
while (iterator.hasNext()) {
    (0, Println_1.println)(iterator.next().name);
}
//# sourceMappingURL=app.js.map