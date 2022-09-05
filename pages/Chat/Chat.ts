import { Block } from "../../src/utils/Block";
import template from "./chat.hbs";

interface IChatPageProps {
  title: string;
}

export class ChatPage extends Block {
  constructor(props: IChatPageProps) {
    super("div", props);
  }

  render() {
    return this.compile(template, {
      title: this.props.title,
      children: this.children,
      onClick: () => {
        console.log("Chat page");
      },
    });
  }
}
