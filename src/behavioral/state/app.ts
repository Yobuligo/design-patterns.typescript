namespace State {
  interface IHoover {
    power: number;
    useWipe: boolean;
    state: IState;
    onCarpet(): void;
    onTile(): void;
  }

  interface IState {
    onCarpet(): void;
    onTile(): void;
  }

  abstract class State implements IState {
    constructor(protected hoover: IHoover) {}
    abstract onCarpet(): void;
    abstract onTile(): void;
  }

  class Carpet extends State {
    constructor(hoover: IHoover) {
      super(hoover);
      hoover.power = 1000;
      hoover.useWipe = false;
    }

    onCarpet(): void {
      console.log("Already in Carpet mode");
    }

    onTile(): void {
      this.hoover.state = new Tile(this.hoover);
    }
  }

  class Tile extends State {
    constructor(hoover: IHoover) {
      super(hoover);
      hoover.power = 500;
      hoover.useWipe = true;
    }

    onCarpet(): void {
      this.hoover.state = new Carpet(this.hoover);
    }

    onTile(): void {
      console.log("Already in Tile mode");
    }
  }

  class Hoover implements IHoover {
    power: number = 0;
    useWipe: boolean = false;
    public state: IState = new Carpet(this);

    onCarpet(): void {
      console.log(`Carpet detected, switch to carpet mode`);
      this.state.onCarpet();
      this.print();
    }

    onTile(): void {
      console.log(`Tiles detected, switch to tile mode`);
      this.state.onTile();
      this.print();
    }

    private print() {
      console.log(
        `Hoover works now with '${sensor.power}' W and wipe is '${
          sensor.useWipe ? "on" : "off"
        }'`
      );
    }
  }

  const sensor = new Hoover();
  sensor.onCarpet();
  sensor.onTile();
}
