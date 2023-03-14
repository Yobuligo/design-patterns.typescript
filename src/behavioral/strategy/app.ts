namespace Strategy {
  interface IPrinter {
    print(message: string): void;
  }

  class BasePrinter implements IPrinter {
    print(message: string): void {
      console.log(message);
    }
  }

  class SpacePrinter implements IPrinter {
    print(message: string): void {
      console.log(this.convertMessage(message));
    }

    private convertMessage(message: string): string {
      let result: string = "";
      for (const char of message) {
        if (result === "") {
          result = char;
        } else {
          result += ` ${char}`;
        }
      }
      return result;
    }
  }

  class TextPrinter {
    constructor(public printer: IPrinter) {}

    print(message: string) {
      this.printer.print(message);
    }
  }

  const textPrinter = new TextPrinter(new BasePrinter());
  textPrinter.print("Test message");
  textPrinter.printer = new SpacePrinter();
  textPrinter.print("Test message");
}
