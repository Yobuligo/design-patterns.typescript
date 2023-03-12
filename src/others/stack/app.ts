namespace Stack {
  interface IStack<T> {
    isEmpty(): boolean;
    push(value: T): void;
    pop(): boolean;
    peek(): T | undefined;
  }

  class Stack<T> implements IStack<T> {
    private stack: T[] = [];

    isEmpty(): boolean {
      return this.stack.length === 0;
    }

    push(value: T): void {
      this.stack.push(value);
    }

    pop(): boolean {
      if (this.isEmpty()) {
        return false;
      }

      this.stack.splice(this.stack.length - 1, 1);
      return true;
    }

    peek(): T | undefined {
      return this.stack[this.stack.length - 1];
    }
  }

  const stack = new Stack()
  stack.
}
