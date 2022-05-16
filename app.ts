import { println } from "./src/main/core/Println";
import { AudiFactory } from "./src/main/factory/AudiFactory";
import { ICarFactory } from "./src/main/factory/ICarFactory";

const carFactory: ICarFactory = new AudiFactory();
const car = carFactory.create();
println(car.name);
