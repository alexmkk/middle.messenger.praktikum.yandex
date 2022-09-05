import { Block } from "../../utils/Block";
import template from "./dialogInfo.hbs";

interface IDialogInfoProps {
  userName: string;
  previewMessage: string;
  time: string;
  notifications: number;
  isManyNotifications: boolean;
  isAnswer: boolean;
}

export class DialogInfo extends Block {
  constructor({
    userName,
    previewMessage,
    time,
    notifications,
    isManyNotifications = false,
    isAnswer = false,
  }: IDialogInfoProps) {
    super("div", {
      userName,
      previewMessage,
      time,
      notifications,
      isManyNotifications,
      isAnswer,
    });
  }

  render() {
    return this.compile(template, {
      userName: this.props.userName,
      previewMessage: this.props.previewMessage,
      time: this.props.time,
      notifications: this.props.notifications,
      isManyNotifications: this.props.isManyNotifications,
      isAnswer: this.props.isAnswer,
    });
  }
}
