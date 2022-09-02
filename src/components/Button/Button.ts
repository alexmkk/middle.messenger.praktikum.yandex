import { Block } from "../../utils/Block";
import template from "./button.hbs";
import styles from "./button.scss";

interface IButtonProps {
    label: string;
    onClick?: () => void;
}

export class Button extends Block {
    constructor({label, onClick}: IButtonProps) {
        super("button", {
            label,
            events: {
                click: onClick
            }
        });
    }

    render() {
        return this.compile(template, {label: this.props.label, styles});
    }
}