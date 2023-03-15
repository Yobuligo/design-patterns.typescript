namespace Builder {
  enum Color {
    black,
    red,
    white,
    yellow,
  }

  enum Light {
    Xenon,
    LED,
  }

  interface IHaveName {
    readonly name: string;
  }

  interface ICar {
    readonly color: Color;
    readonly engine: IEngine;
    readonly light: Light;
    readonly model: IModel;
  }

  interface ICarBuilder {
    setColor(color: Color): ICarBuilder;
    setEngine(engine: IEngine): ICarBuilder;
    setLight(light: Light): ICarBuilder;
    setModel(model: IModel): ICarBuilder;
    build(): ICar;
  }

  interface IModel extends IHaveName {}

  interface IEngine extends IHaveName {
    readonly power: number;
  }

  class Car implements ICar {
    constructor(
      readonly color: Color,
      readonly engine: IEngine,
      readonly light: Light,
      readonly model: IModel
    ) {}
  }

  class BMW implements IModel {
    readonly name: string = BMW.name;
  }

  class Mercedes implements IModel {
    readonly name: string = Mercedes.name;
  }

  class Porsche implements IModel {
    readonly name: string = Porsche.name;
  }

  class EEngine implements IEngine {
    readonly name: string = "E-Engine";
    readonly power: number = 200;
  }

  class DieselEngine implements IEngine {
    readonly name: string = "Diesel Engine ";
    readonly power: number = 400;
  }

  class CarBuilder implements ICarBuilder {
    private color: Color = Color.white;
    private engine: IEngine = new DieselEngine();
    private light: Light = Light.Xenon;

    constructor(private model: IModel) {}

    setColor(color: Color): ICarBuilder {
      this.color = color;
      return this;
    }

    setEngine(engine: IEngine): ICarBuilder {
      this.engine = engine;
      return this;
    }

    setLight(light: Light): ICarBuilder {
      this.light = light;
      return this;
    }

    setModel(model: IModel): ICarBuilder {
      this.model = model;
      return this;
    }

    build(): ICar {
      return new Car(this.color, this.engine, this.light, this.model);
    }
  }

  const carBuilder = new CarBuilder(new Porsche());
  const car = carBuilder
    .setEngine(new EEngine())
    .setColor(Color.black)
    .setLight(Light.LED)
    .build();

  console.log(
    `The created car is a '${car.model.name}' in '${
      Color[car.color]
    }'. It has an '${car.engine.name}' with '${car.engine.power}' PS and '${
      Light[car.light]
    }' light`
  );
}
