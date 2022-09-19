import { Block } from "../../utils/Block";
import template from "./home.hbs";

export class HomePage extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(template, {
      children: this.children,
    });
  }
}
