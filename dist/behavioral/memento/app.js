"use strict";
var Memento;
(function (Memento) {
    var PersonDialog = /** @class */ (function () {
        function PersonDialog() {
            this.firstname = "";
            this.lastname = "";
            this.age = 18;
        }
        PersonDialog.prototype.save = function () {
            return {
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
            };
        };
        PersonDialog.prototype.restore = function (person) {
            this.firstname = person.firstname;
            this.lastname = person.lastname;
            this.age = person.age;
        };
        return PersonDialog;
    }());
    var printPerson = function (personDialog) {
        console.log("Firstname is ".concat(personDialog.firstname));
        console.log("Lastname is ".concat(personDialog.lastname));
        console.log("Age is ".concat(personDialog.age));
    };
    /**
     * The following coding is the caretaker that works with the Originator (PersonDialog) and the Memento (IPerson)
     */
    var personDialog = new PersonDialog();
    personDialog.firstname = "Stacey";
    personDialog.lastname = "Starfish";
    personDialog.age = 27;
    var stacey = personDialog.save();
    printPerson(personDialog);
    personDialog.firstname = "Bertha";
    personDialog.lastname = "Bear";
    personDialog.age = 38;
    printPerson(personDialog);
    personDialog.restore(stacey);
    printPerson(personDialog);
})(Memento || (Memento = {}));
//# sourceMappingURL=app.js.map