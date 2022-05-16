import { IButton } from "./IButton";
import { IInput } from "./IInput";

export interface IElementFactory {
  button(): IButton;
  input(): IInput;
}
