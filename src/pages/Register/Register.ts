import { Block } from "../../utils/Block";
import template from "./register.hbs";
import { getFormData } from "../../helpers/getFormData";
import AuthController from "../../controllers/AuthController";

export class RegisterPage extends Block {
  constructor() {
    super({});
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const signupData = getFormData();

    const result = AuthController.signup(signupData as any);
  }

  render() {
    return this.compile(template, {
      children: this.children,
      onClick: this.handleSubmit,
    });
  }
}
