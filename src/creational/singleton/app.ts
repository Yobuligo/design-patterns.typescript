namespace Singleton {
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      if (!this.instance) {
        this.instance = new Singleton();
      }
      return this.instance;
    }
  }

  const singleton = Singleton.getInstance();
}
