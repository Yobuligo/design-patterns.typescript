class Multiton {
  private static instances: Map<string, Multiton> = new Map();

  private constructor(public key: string) {}

  public static getInstance(key: string): Multiton {
    let instance = this.instances.get(key);
    if (!instance) {
      instance = new Multiton(key);
      this.instances.set(key, instance);
    }
    return instance;
  }
}

const multitonFirst = Multiton.getInstance("first");
const multitonFirstBackup = Multiton.getInstance("first");
const multitonSecond = Multiton.getInstance("second");
const multitonSecondBackup = Multiton.getInstance("second");
