import { mutableListOf } from "../core/collections/Functions";
import { IHaveChildren } from "./IHaveChildren";
import { IIterator } from "./IIterator";

export class Iterator<T extends IHaveChildren<any>> implements IIterator<T> {
  private stack = mutableListOf<T>();

  constructor(private root: T) {
    this.initializeStack();
  }

  hasNext(): boolean {
    return this.stack.isNotEmpty();
  }

  next(): T {
    const next = this.stack.first();
    this.stack.remove(next);
    const children = next.getChildren();
    if (children !== undefined) {
      this.stack.addList(0, children);
    }
    return next;
  }

  reset(): void {
    this.initializeStack();
  }

  private initializeStack() {
    this.stack.removeAll();
    this.stack.add(this.root);
  }
}
