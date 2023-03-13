namespace ChainOfResponsibility {
  interface IRequest {
    readonly operation: string;
    readonly value1: number;
    readonly value2: number;
  }

  interface IHandler {
    follower: IHandler | undefined;
    handle(request: IRequest): number | undefined;
  }

  class Request implements IRequest {
    constructor(
      readonly operation: string,
      readonly value1: number,
      readonly value2: number
    ) {}
  }

  class Addition implements IHandler {
    constructor(public follower: IHandler | undefined) {}

    handle(request: IRequest): number | undefined {
      if (request.operation === "+") {
        return request.value1 + request.value2;
      }

      if (this.follower) {
        return this.follower.handle(request);
      }
    }
  }

  class Subtraction implements IHandler {
    constructor(public follower: IHandler | undefined) {}
    
    handle(request: IRequest): number | undefined {
      if (request.operation === "-") {
        return request.value1 - request.value2;
      }

      if (this.follower) {
        return this.follower.handle(request);
      }
    }
  }

  class Handler implements IHandler {
    follower: IHandler = new Addition(new Subtraction(undefined));

    handle(request: IRequest): number | undefined {
      return this.follower?.handle(request);
    }
  }

  const handler = new Handler();
  console.log(handler.handle(new Request("+", 7, 3)));
  console.log(handler.handle(new Request("-", 7, 3)));
  console.log(handler.handle(new Request("*", 7, 3)));
}
