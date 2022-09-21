import { Block } from "../../utils/Block";
import template from "./input.hbs";

interface IInputProps {
  name: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  id?: string;
}

export class Input extends Block {
  constructor({
    type = "text",
    name,
    value = "",
    placeholder = "",
    onFocus,
    onBlur,
    id,
  }: IInputProps) {
    super({
      name,
      type,
      value,
      placeholder,
      id,
      events: {
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      placeholder: this.props.placeholder,
    });
  }
}
