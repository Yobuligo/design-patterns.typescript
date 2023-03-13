namespace Command {
  interface ICommand {
    execute(): void;
  }

  class Addition implements ICommand {
    execute(): void {
      console.log("Addition was called");
    }
  }

  class Subtraction implements ICommand {
    execute(): void {
      console.log("Subtraction was called");
    }
  }

  class Button {
    command: ICommand | undefined;

    onClick() {
      this.command?.execute();
    }
  }

  const button = new Button();
  button.command = new Addition();
  button.onClick();
  button.command = new Subtraction();
  button.onClick();
}
