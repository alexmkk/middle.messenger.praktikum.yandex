import { Block } from "../../src/utils/Block";
import template from "./profile.hbs";

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(template, {
      children: this.children,
    });
  }
}
