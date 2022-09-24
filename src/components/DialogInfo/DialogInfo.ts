import { Block } from "../../utils/Block";
import template from "./dialogInfo.hbs";
import styles from "./styles.module.scss";
import ChatController from "../../controllers/ChatController";
import { IChatUser } from "../../api/ChatAPI";
import { withStore } from "../../utils/Store";

interface IDialogInfoProps {
  title: string;
  last_message: string;
  time: string;
  unread_count: number;
  isManyNotifications: boolean;
  isAnswer: boolean;
  onClick?: () => void;
  activeChat?: number;
}

export class DialogInfoBase extends Block {
  constructor(props: IDialogInfoProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => this.handleSelect(e),
      },
    });
  }

  handleSelect(e: Event) {
    const target = e.currentTarget as HTMLDivElement;

    ChatController.getChatUsers(Number(target.id), {} as IChatUser);
  }

  render() {
    const isActiveChat = this.props.id === this.props.activeChat;

    return this.compile(template, {
      ...this.props,
      isActiveChat,
      styles,
    });
  }
}

export const withActiveChat = withStore((state) => {
  return {
    activeChat: state.activeChat,
    styles,
  };
});

export const DialogInfo = withActiveChat(DialogInfoBase as typeof Block);
