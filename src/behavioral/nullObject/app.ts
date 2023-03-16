namespace NullObject {
  interface IAction {
    execute(): void;
  }

  class NullObjectAction implements IAction {
    execute(): void {
      console.log(`Null object does nothing.`);
    }
  }

  class Action implements IAction {
    execute(): void {
      console.log(`Concrete object does something`);
    }
  }

  class Service {
    public action: IAction;
    constructor() {
      this.action = new NullObjectAction();
    }

    execute() {
      this.action.execute();
    }
  }

  const service = new Service();
  service.execute();
  service.action = new Action();
  service.execute();
}
