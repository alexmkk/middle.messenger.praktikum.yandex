import { Block } from "../../src/utils/Block";
import template from "./home.hbs";

interface IHomePageProps {
  title: string;
}

export class HomePage extends Block<IHomePageProps> {
  constructor(props: IHomePageProps) {
    super("div", props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      children: this.children,
    });
  }
}
