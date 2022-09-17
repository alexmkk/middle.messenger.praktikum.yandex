import { Block } from "../../src/utils/Block";
import template from "./profileEditPass.hbs";
import { getFormData } from "../../src/helpers/getFormData";

interface IProfileEditPassPageProps {
  title: string;
}

export class ProfileEditPassPage extends Block {
  constructor(props: IProfileEditPassPageProps) {
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
