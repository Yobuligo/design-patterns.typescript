namespace Delegation {
  interface ICallee {
    call(value: string): void;
  }

  class Base implements ICallee {
    call(value: string): void {
      console.log(`Callee was called with value '${value}'`);
    }
  }

  class Caller implements ICallee {
    constructor(private callee: ICallee) {}

    call(value: string): void {
      this.callee.call(value);
    }
  }

  const caller = new Caller(new Base());
  caller.call("My value");
}
