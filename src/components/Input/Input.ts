import { Block } from "../../utils/Block";
import template from "./input.hbs";

interface IInputProps {
  name: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class Input extends Block {
  constructor({ type = "text", name, value = "", placeholder = "", onFocus, onBlur }: IInputProps) {
    super({
      name,
      type,
      value,
      placeholder,
      events: {
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  render() {
    return this.compile(template, {
      name: this.props.name,
      type: this.props.type,
      value: this.props.value,
      placeholder: this.props.placeholder,
    });
  }
}
