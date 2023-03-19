namespace Mediator {
  class Button {
    private _enabled: boolean = true;

    get enabled(): boolean {
      return this._enabled;
    }

    set enabled(value: boolean) {
      this._enabled = value;
      console.log(`Button was '${this._enabled ? "enabled" : "disabled"}'`);
    }
  }

  class Input {
    private onChangeHandlers: ((value: string) => void)[] = [];
    private _value: string = "";

    set value(value: string) {
      if (this._value === value) {
        return;
      }

      this._value = value;
      this.onChangeHandlers.forEach((handler) => handler(this._value));
    }

    onChange(handler: (value: string) => void): void {
      this.onChangeHandlers.push(handler);
    }
  }

  /**
   * Dialog is the mediator that takes over the controlling of the components (here button and input)
   * without the need that these components need each other.
   * It contains the business logic.
   */
  class Dialog {
    private button = new Button();
    private input = new Input();

    constructor() {
      this.input.onChange(this.onInputValueChange);
    }

    enterInputValue(value: string) {
      this.input.value = value;
    }

    private onInputValueChange = (value: string) => {
      this.button.enabled = value.includes("@");
    };
  }

  const dialog = new Dialog();
  dialog.enterInputValue("test");
  dialog.enterInputValue("mediator@test.com");
}
