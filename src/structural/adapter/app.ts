namespace Adapter {
  interface IRemoteControl {
    on(): void;
    off(): void;
  }

  /**
   * Imagine this class cannot be extended. But we want to use it by using the remote control
   */
  class Fan {
    start(): void {
      console.log(`Start the Fan`);
    }

    stop(): void {
      console.log(`Stop the Fan`);
    }
  }

  class FanAdapter implements IRemoteControl {
    constructor(private fan: Fan) {}

    on(): void {
      this.fan.start();
    }

    off(): void {
      this.fan.stop();
    }
  }

  const remoteControl: IRemoteControl = new FanAdapter(new Fan());
  remoteControl.on();
  remoteControl.off();
}
