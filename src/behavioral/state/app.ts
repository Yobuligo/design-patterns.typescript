namespace State {
  interface IHoover {
    power: number;
    useWipe: boolean;
  }

  interface ISensor {
    readonly hoover: IHoover;
    state: IState;
    onCarpet(): void;
    onTile(): void;
  }

  interface IState {
    onCarpet(): void;
    onTile(): void;
  }

  abstract class State implements IState {
    constructor(protected sensor: ISensor) {}

    abstract onCarpet(): void;
    abstract onTile(): void;
  }

  class Carpet extends State {
    constructor(sensor: ISensor) {
      super(sensor);
      sensor.hoover.power = 1000;
      sensor.hoover.useWipe = false;
    }

    onCarpet(): void {
      console.log("Already in Carpet mode");
    }

    onTile(): void {
      this.sensor.state = new Tile(this.sensor);
    }
  }

  class Tile extends State {
    constructor(sensor: ISensor) {
      super(sensor);
      sensor.hoover.power = 500;
      sensor.hoover.useWipe = true;
    }

    onCarpet(): void {
      this.sensor.state = new Carpet(this.sensor);
    }

    onTile(): void {
      console.log("Already in Tile mode");
    }
  }

  class Sensor implements ISensor {
    public state: IState = new Carpet(this);

    constructor(readonly hoover: IHoover) {}

    onCarpet(): void {
      console.log(`Switch to carpet mode`);
      this.state.onCarpet();
    }

    onTile(): void {
      console.log(`Switch to tile mode`);
      this.state.onTile();
    }
  }

  class Hoover implements IHoover {
    power: number = 0;
    useWipe: boolean = false;
  }

  const printHoover = (hoover: IHoover) => {
    console.log(
      `Hoover works now with '${hoover.power}' W and wipe is '${
        hoover.useWipe ? "on" : "off"
      }'`
    );
  };

  const hoover = new Hoover();
  const sensor = new Sensor(hoover);
  printHoover(hoover);
  sensor.onCarpet();
  printHoover(hoover);
  sensor.onTile();
  printHoover(hoover);
}
