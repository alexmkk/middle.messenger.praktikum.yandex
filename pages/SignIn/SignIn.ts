import { Block } from "../../src/utils/Block";
import template from "./signin.hbs";
import { getFormData } from "../../src/helpers/getFormData";

export class SignInPage extends Block {
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
