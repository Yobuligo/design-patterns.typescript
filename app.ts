import { println } from "./src/main/core/Println";
import { AudiFactory } from "./src/main/Factory/AudiFactory";
import { ICarFactory } from "./src/main/Factory/ICarFactory";

const carFactory: ICarFactory = new AudiFactory();
const car = carFactory.create();
println(car.name);
