import { Block } from "../../src/utils/Block";
import template from "./signin.hbs";
import { getFormData } from "../../src/helpers/getFormData";

interface ISignInPageProps {
  title: string;
}

export class SignInPage extends Block {
  constructor(props: ISignInPageProps) {
    super("div", props);
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    getFormData();
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      children: this.children,
      onClick: this.handleSubmit,
    });
  }
}
