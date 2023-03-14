namespace Lazy {
  interface ILazy<T> {
    readonly instance: T;
  }

  class Lazy<T> implements ILazy<T> {
    private _instance: T | undefined;

    constructor(private initializer: () => T) {}

    get instance(): T {
      return this._instance ?? this.create();
    }

    private create(): T {
      this._instance = this.initializer();
      return this._instance;
    }
  }

  class Test {
    title = "Test";
  }

  const lazyTest = new Lazy(() => new Test());
  console.log(lazyTest.instance.title);
}
