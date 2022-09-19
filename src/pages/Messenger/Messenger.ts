import { Block } from "../../utils/Block";
import template from "./messenger.hbs";

interface IChatPageProps {
  isChatSelected?: boolean;
}

export class ChatPage extends Block<IChatPageProps> {
  constructor(props: IChatPageProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      isChatSelected: this.props.isChatSelected,
      children: this.children,
    });
  }
}
