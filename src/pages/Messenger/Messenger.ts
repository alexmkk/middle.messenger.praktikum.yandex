import { Block } from "../../utils/Block";
import template from "./messenger.hbs";

interface IMessengerPageProps {
  isChatSelected?: boolean;
}

export class MessengerPage extends Block {
  constructor(props: IMessengerPageProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      isChatSelected: this.props.isChatSelected,
      children: this.children,
    });
  }
}
