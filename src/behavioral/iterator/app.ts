namespace Iterator {
  interface IIterator<T> {
    readonly hasNext: boolean;
    next(): T;
  }

  class Iterator<T> implements IIterator<T> {
    private cursor: number = -1;

    constructor(private elements: T[]) {}

    get hasNext(): boolean {
      return this.elements[this.cursor + 1] !== undefined;
    }

    next(): T {
      this.cursor++;
      return this.elements[this.cursor];
    }
  }

  const iterator = new Iterator<string>(["one", "two", "three"]);
  while (iterator.hasNext) {
    console.log(iterator.next());
  }
}
