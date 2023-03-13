namespace Lazy {
  interface ILazy<T> {
    readonly instance: T;
  }

  class Lazy<T> implements ILazy<T> {
    private _instance: T | undefined;

    constructor(private initializer: () => T) {}

    get instance(): T {
      if (!this._instance) {
        this._instance = this.initializer();
      }
      return this._instance;
    }
  }

  class Test {
    title = "Test";
  }

  const lazyTest = new Lazy(() => {
    return new Test();
  });

  console.log(lazyTest.instance.title);
}
