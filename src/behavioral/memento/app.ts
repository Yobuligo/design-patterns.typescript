namespace Memento {
  /**
   * The memento object which keeps the state
   */
  interface IPerson {
    readonly firstname: string;
    readonly lastname: string;
    readonly age: number;
  }

  /**
   * The originator which has the state (firstname, lastname, age) and provides methods for saving and restoring
   */
  interface IPersonDialog {
    firstname: string;
    lastname: string;
    age: number;
    save(): IPerson;
    restore(person: IPerson): void;
  }

  class PersonDialog implements IPersonDialog {
    public firstname: string = "";
    public lastname: string = "";
    public age: number = 18;

    save(): IPerson {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
      };
    }

    restore(person: IPerson): void {
      this.firstname = person.firstname;
      this.lastname = person.lastname;
      this.age = person.age;
    }
  }

  const printPerson = (personDialog: PersonDialog) => {
    console.log(`Firstname is ${personDialog.firstname}`);
    console.log(`Lastname is ${personDialog.lastname}`);
    console.log(`Age is ${personDialog.age}`);
  };

  /**
   * The following coding is the caretaker that works with the Originator (PersonDialog) and the Memento (IPerson)
   */
  const personDialog = new PersonDialog();
  personDialog.firstname = "Stacey";
  personDialog.lastname = "Starfish";
  personDialog.age = 27;
  const stacey = personDialog.save();
  printPerson(personDialog);

  personDialog.firstname = "Bertha";
  personDialog.lastname = "Bear";
  personDialog.age = 38;
  printPerson(personDialog);

  personDialog.restore(stacey);
  printPerson(personDialog);
}
