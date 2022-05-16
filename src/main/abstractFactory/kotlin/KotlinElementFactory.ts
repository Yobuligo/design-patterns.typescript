import { IButton } from "../api/IButton";
import { IElementFactory } from "../api/IElementFactory";
import { IInput } from "../api/IInput";
import { KotlinButton } from "./KotlinButton";
import { KotlinInput } from "./KotlinInput";

export class KotlinElementFactory implements IElementFactory {
  button(): IButton {
    return new KotlinButton();
  }
  input(): IInput {
    return new KotlinInput();
  }
}
