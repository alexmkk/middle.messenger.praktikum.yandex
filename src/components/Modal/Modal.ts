import { Block } from "../../utils/Block";
import template from "./modal.hbs";
import styles from "./styles.module.scss";

export class Modal extends Block {
  constructor(props: any) {
    super(props);
  }

  handleSubmit(e: Event) {
    e.preventDefault();
  }

  render() {
    return this.compile(template, {
      ...this.props,
      onClose: this.handleSubmit,
      children: this.children,
      styles,
    });
  }
}
