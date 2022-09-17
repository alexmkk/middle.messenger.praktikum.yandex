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

export class DialogInfo extends Block<IDialogInfoProps> {
  constructor(props: IDialogInfoProps) {
    super(
      "div",
      Object.assign(
        {
          isManyNotifications: false,
          isAnswer: false,
        },
        {
          ...props,
        }
      )
    );
  }

  render() {
    const { userName, previewMessage, time, notifications, isManyNotifications, isAnswer } =
      this.props;

    return this.compile(template, {
      userName,
      previewMessage,
      time,
      notifications,
      isManyNotifications,
      isAnswer,
    });
  }
}
