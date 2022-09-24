import template from "./dialogHeader.hbs";
import { Block } from "../../utils/Block";
import styles from "./styles.module.scss";
import store, { withStore } from "../../utils/Store";
import ChatsController from "../../controllers/ChatController";
import { isEqualObject } from "../../utils/IsEqualObject";

export class DialogHeader extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  // componentDidUpdate(_oldProps: any, _newProps: any): boolean {
  //   if (!isEqualObject(_oldProps, _newProps)) {
  //     console.log("_oldProps", _oldProps, _newProps);
  //     const chatInfo = ChatsController.getChatInfoById(_newProps.activeChat);
  //     if (chatInfo?.length) {
  //       this.setProps({ title: chatInfo[0].title });
  //     }
  //     return true;
  //   }
  //
  //   return false;
  // }

  render() {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
//
