namespace ObjectPool {
  interface IObjectPool<T extends object> {
    acquire(): T;
    release(object: T): void;
  }

  class ObjectPool<T extends object> implements IObjectPool<T> {
    private acquired: T[] = [];
    private released: T[] = [];

    constructor(
      private initializer: (index: number) => T,
      private capacity: number
    ) {}

    acquire(): T {
      if (this.released.length > 0) {
        return this.checkout(this.released[0]);
      }

      if (this.acquired.length < this.capacity) {
        const object = this.initializer(this.acquired.length + 1);
        return this.checkout(object);
      }

      throw new Error("Capacity exhausted");
    }

    release(object: T): void {
      this.released.push(object);
      this.acquired.splice(this.acquired.indexOf(object), 1);
    }

    private checkout(object: T): T {
      this.acquired.push(object);
      this.released.splice(this.released.indexOf(object), 1);
      return object;
    }
  }

  class Test {
    constructor(readonly text: string) {}
  }

  const objectPool = new ObjectPool((index) => {
    return new Test(index.toString());
  }, 3);

  console.log(objectPool.acquire().text);
  console.log(objectPool.acquire().text);
  const test = objectPool.acquire();
  console.log(test.text);

  try {
    console.log(objectPool.acquire().text);
  } catch (error) {
    console.log((error as Error).message);
  }

  objectPool.release(test);
  console.log(objectPool.acquire().text);
}
