namespace Singleton {
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      return this.instance ?? this.create();
    }

    private static create() {
      this.instance = new Singleton();
      return this.instance;
    }
  }

  const singleton = Singleton.getInstance();
}
