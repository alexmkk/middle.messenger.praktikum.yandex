import { Block } from "../../src/utils/Block";
import template from "./login.hbs";

import { getFormData } from "../../src/helpers/getFormData";

interface ILoginPageProps {
  title: string;
}

export class LoginPage extends Block {
  constructor(props: ILoginPageProps) {
    super("div", props);
  }

  handleSubmit(e) {
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
