namespace Repository {
  interface IRepository<T> {
    readonly values: T[];
    add(value: T): void;
    remove(value: T): void;
  }

  class Repository<T> implements IRepository<T> {
    private _values: T[] = [];

    get values(): T[] {
      return this._values;
    }

    add(value: T): void {
      this._values.push(value);
    }

    remove(value: T): void {
      this._values.splice(this._values.indexOf(value), 1);
    }
  }

  class Test {
    constructor(public title: string) {}
  }

  const repository = new Repository<Test>();
  repository.add(new Test("first"));
  repository.add(new Test("second"));
  for (const value of repository.values) {
    console.log(value.title);
  }
}
