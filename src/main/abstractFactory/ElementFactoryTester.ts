import { println } from "../core/Println";
import { IElementFactory } from "./api/IElementFactory";

export class ElementFactoryTester {
  constructor(private elementFactory: IElementFactory) {}

  test() {
    const button = this.elementFactory.button();
    println(`Created the button: ${button.name}`);
    const input = this.elementFactory.input();
    println(`Created the input: ${input.name}`);
  }
}
