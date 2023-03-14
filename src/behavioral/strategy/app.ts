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

  class TextOutput {
    constructor(public printer: IPrinter) {}

    print(message: string) {
      this.printer.print(message);
    }
  }

  const textOutput = new TextOutput(new BasePrinter());
  textOutput.print("Test message");
  textOutput.printer = new SpacePrinter();
  textOutput.print("Test message");
}
