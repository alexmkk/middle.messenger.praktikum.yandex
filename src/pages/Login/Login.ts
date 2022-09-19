import { Block } from "../../utils/Block";
import template from "./login.hbs";

import { getFormData } from "../../helpers/getFormData";

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    getFormData();
  }

  render() {
    return this.compile(template, {
      children: this.children,
      onClick: this.handleSubmit,
    });
  }
}
