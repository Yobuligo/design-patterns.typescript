import { repeat } from "./Repeat";

export {};

declare global {
  interface Array<T> {
    apply(block: (list: Array<T>) => void): Array<T>;
  }

  interface String {
    ifNotEmpty(block: (value: string) => void): void;
    repeat(times: number): string;
  }

  interface Boolean {
    ifTrue(block: () => void);
    ifFalse(block: () => void);
  }
}

Array.prototype.apply = function (block) {
  block(this);
  return this;
};

String.prototype.ifNotEmpty = function (block: (value: string) => void): void {
  if (this != "") {
    block(this);
  }
};

String.prototype.repeat = function (times: number): string {
  switch (times) {
    case 0:
      return "";
    case 1:
      return this;
    default: {
      let result = "";
      repeat(times, () => {
        result += this;
      });
      return result;
    }
  }
};

Boolean.prototype.ifTrue = function (block: () => void): void {
  if (this) {
    block();
  }
};

Boolean.prototype.ifFalse = function (block: () => void): void {
  if (!this) {
    block();
  }
};
