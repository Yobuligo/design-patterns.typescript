namespace Observer {
  interface IObserver {
    update(): void;
  }

  interface IObservable {
    add(observer: IObserver): void;
    notify(): void;
  }

  class Observable implements IObservable {
    private observers: IObserver[] = [];

    add(observer: IObserver): void {
      this.observers.push(observer);
    }

    notify(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }

  class Observer implements IObserver {
    constructor(private title: string) {}

    update(): void {
      console.log(`I observer '${this.title}' was updated`);
    }
  }

  const observable = new Observable();
  observable.add(new Observer("first"));
  observable.add(new Observer("second"));
  observable.notify();
}
