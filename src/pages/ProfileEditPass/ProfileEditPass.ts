import { Block } from "../../utils/Block";
import template from "./profileEditPass.hbs";
import { getFormData } from "../../helpers/getFormData";

export class ProfileEditPassPage extends Block {
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
