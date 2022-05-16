import { IButton } from "../api/IButton";
import { IElementFactory } from "../api/IElementFactory";
import { IInput } from "../api/IInput";
import { HTMLButton } from "./HTMLButton";
import { HTMLInput } from "./HTMLInput";

export class HTMLElementFactory implements IElementFactory {
  button(): IButton {
    return new HTMLButton();
  }
  input(): IInput {
    return new HTMLInput();
  }
}
