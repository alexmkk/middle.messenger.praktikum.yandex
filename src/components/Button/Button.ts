import { Block } from "../../utils/Block";
import template from "./button.hbs";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class Button extends Block {
  constructor({ label, onClick, onFocus, onBlur }: IButtonProps) {
    super("button", {
      label,
      events: {
        click: onClick,
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  render() {
    return this.compile(template, { label: this.props.label });
  }
}
