import { Block } from "../../src/utils/Block";
import template from "./profile.hbs";

interface IProfilePageProps {
  title: string;
}

export class ProfilePage extends Block {
  constructor(props: IProfilePageProps) {
    super("div", props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      children: this.children,
    });
  }
}
