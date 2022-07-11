import { mutableListOf } from "../core/collections/Functions";
import { println } from "../core/Println";

type Factory<T> = (index: number) => T;

interface IObjectPool<T> {
  acquire(): T;
  release(object: T): void;
}

class ObjectPool<T> implements IObjectPool<T> {
  private acquired = mutableListOf<T>();
  private released = mutableListOf<T>();

  constructor(
    private readonly factory: Factory<T>,
    private readonly maxNumber: number
  ) {}

  acquire(): T {
    return this.checkout(this.fetch());
  }

  release(object: T): void {
    this.released.add(object);
    this.acquired.remove(object);
  }

  private fetch(): T {
    if (this.released.isNotEmpty()) {
      return this.released.first();
    } else {
      return this.create();
    }
  }

  private create(): T {
    if (this.acquired.size < this.maxNumber) {
      return this.factory(this.acquired.size + 1);
    } else {
      throw new Error("No more objects available");
    }
  }

  private checkout(object: T): T {
    this.acquired.add(object);
    this.released.remove(object);
    return object;
  }
}

function objectPool<T>(
  factory: Factory<T>,
  maxNumber: number = 3
): ObjectPool<T> {
  return new ObjectPool<T>(factory, maxNumber);
}

class Person {
  constructor(readonly firstname: string) {}
}

const personPool = objectPool((index) => {
  return new Person(index.toString());
});

println(personPool.acquire().firstname);
println(personPool.acquire().firstname);
const third = personPool.acquire();
println(third.firstname);
personPool.release(third);
println(personPool.acquire().firstname);
println(personPool.acquire().firstname);
