import { Block } from "../../src/utils/Block";
import template from "./chat.hbs";

interface IChatPageProps {
  title: string;
  isChatSelected?: boolean;
}

export class ChatPage extends Block {
  constructor(props: IChatPageProps) {
    super("div", props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      isChatSelected: this.props.isChatSelected,
      children: this.children,
    });
  }
}
