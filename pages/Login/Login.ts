import { Block } from "../../src/utils/Block";
import template from "./login.hbs";

import { getFormData } from "../../src/helpers/getFormData";

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
