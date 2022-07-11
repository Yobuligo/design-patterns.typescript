import { IHaveChildren } from "./IHaveChildren";
import { IIterator } from "./IIterator";

export class Iterator<T extends IHaveChildren<any>> implements IIterator<T> {
  private stack: T[] = [];

  constructor(private root: T) {
    this.initializeStack();
  }

  hasNext(): boolean {
    if (this.stack.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  next(): T {
    const next = this.stack[0];
    this.stack.splice(this.stack.indexOf(next), 1);
    const children = next.getChildren();
    if (children !== undefined) {
      children.push(...this.stack);
      this.stack = children;
    }
    return next;
  }

  reset(): void {
    this.initializeStack();
  }

  private initializeStack() {
    this.stack.splice(0, this.stack.length);
    this.stack.push(this.root);
  }
}
