import API, { ChatAPI, IChatsGet, IChatUser } from "../api/ChatAPI";
import store from "../utils/Store";
import { NotificationTypes, showNotification } from "../utils/ShowNotification";

export class ChatsController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }

  async fetchChats(data: IChatsGet) {
    const chats = await this.api.getChats(data);

    store.set("searchChatText", data.title);
    store.set("activeChat", null);
    store.set("chats", chats);
  }

  async createChat(title: string) {
    try {
      await this.api.createChat(title);
      await this.fetchChats({});
      store.set("activeChat", null);
      showNotification();
    } catch (e) {
      showNotification(e.reason, NotificationTypes.Warning);
    }
  }

  async getChatUsers(id: number, data: IChatUser) {
    try {
      await this.api.getChatUsers(id, data);

      store.set("activeChat", id);
      store.set("createChat", "");
    } catch (e) {
      console.error(e.message);
    }
  }

  async removeChat(id: number) {
    try {
      await this.api.deleteChat(id);
      await this.fetchChats({});

      store.set("activeChat", null);
      showNotification();
    } catch (e) {
      showNotification(e.reason, NotificationTypes.Warning);
    }
  }

  async addUsersToChat(data: { users: number[]; chatId: number }) {
    try {
      await this.api.addUsersToChat(data);

      showNotification();
    } catch (e) {
      showNotification(e.reason, NotificationTypes.Warning);
    }
  }
}

export default new ChatsController();
