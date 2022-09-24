import { Block } from "../../utils/Block";
import template from "./messenger.hbs";
import styles from "./styles.module.scss";
import ChatController from "../../controllers/ChatController";
import { getFormData } from "../../helpers/getFormData";
import { withStore } from "../../utils/Store";

class MessengerPageBase extends Block {
  init() {
    ChatController.fetchChats({});
    this.showCreateForm = this.showCreateForm.bind(this);
    this.handleCreateChat = this.handleCreateChat.bind(this);
  }

  showCreateForm(e: Event) {
    e.preventDefault();
    this.setProps({ create: "Создать чат" });
  }

  handleCreateChat(e: Event) {
    e.preventDefault();
    const { title } = getFormData();
    ChatController.createChat(title);
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      showCreateForm: this.showCreateForm,
      createChat: this.handleCreateChat,
      styles,
    });
  }
}

const withChats = withStore((state) => {
  return {
    ...state.newChatId,
    chats: state.chats,
    activeChat: state.activeChat,
  };
});

export const MessengerPage = withChats(MessengerPageBase);
