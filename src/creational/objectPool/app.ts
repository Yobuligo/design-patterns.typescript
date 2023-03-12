interface IObjectPool<T extends object> {
  acquire(): T;
  acquireOrNull(): T | undefined;
  release(object: T): void;
}

class ObjectPool<T extends object> implements IObjectPool<T> {
  private acquired: T[] = [];
  private released: T[] = [];

  acquire(): T {
    return this.acquireOrNull() ?? this.error("Capacity is exhausted");
  }

  acquireOrNull(): T | undefined {
    throw new Error("Method not implemented.");
  }

  release(object: T): void {
    throw new Error("Method not implemented.");
  }

  private error(message: string): never {
    throw new Error(message);
  }
}
