/**
 * There are 2 abstract classes with base functionality. Abstract because they are only implemented rudimentary and should be extended to provide more functionality.
 * In addition:
 * - these classes should be implemented independently
 * - one class uses the other.
 */
namespace Bridge {
  interface IWeapon {
    attack(): void;
  }

  class Sword implements IWeapon {
    attack(): void {
      console.log(`with sword Jato`);
    }
  }

  class Bow implements IWeapon {
    attack(): void {
      console.log(`with bow Apollo`);
    }
  }

  abstract class Specialization {
    constructor(public weapon: IWeapon) {}

    attack(): void {
      console.log(`The ${this.constructor.name} attacks:`);
      this.weapon.attack();
    }
  }

  class Warrior extends Specialization {}

  class Mage extends Specialization {}

  const warrior = new Warrior(new Bow());
  warrior.attack();
  warrior.weapon = new Sword();
  warrior.attack();

  const mage = new Mage(new Bow());
  mage.attack();
}
