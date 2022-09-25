import template from "./dialog.hbs";
import { Block } from "../../utils/Block";
import styles from "./styles.module.scss";

export class Dialog extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,

      styles,
    });
  }
}
