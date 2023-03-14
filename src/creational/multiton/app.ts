namespace Multiton {
  class Multiton {
    private static instances: Map<string, Multiton> = new Map();

    private constructor(public key: string) {}

    public static getInstance(key: string): Multiton {
      return this.instances.get(key) ?? this.create(key);
    }

    private static create(key: string): Multiton {
      const instance = new Multiton(key);
      this.instances.set(key, instance);
      return instance;
    }
  }

  const multitonFirst = Multiton.getInstance("first");
  const multitonFirstBackup = Multiton.getInstance("first");
  const multitonSecond = Multiton.getInstance("second");
  const multitonSecondBackup = Multiton.getInstance("second");
}
