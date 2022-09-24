import API, { ChatAPI, IChatsGet, IChatUser } from "../api/ChatAPI";
import store from "../utils/Store";

export class ChatsController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }

  async fetchChats(data: IChatsGet) {
    const chats = await this.api.getChats(data);

    store.set("chats", chats);
  }

  async createChat(title: string) {
    try {
      const newChat = await this.api.createChat(title);
      const chats = await this.api.getChats({});

      store.set("chats", chats);
      store.set("newChatId", newChat);
    } catch (e) {
      console.error(e.message);
    }
  }

  async getChatUsers(id: number, data: IChatUser) {
    try {
      await this.api.getChatUsers(id, data);

      const activeChatInfo = store.getState().chats.find((chat) => chat.id === id);
      // console.log(store.getState());
      store.set("activeChat", id);
      // store.set("activeChatInfo", activeChatInfo);
    } catch (e) {
      console.error(e.message);
    }
  }

  getChatInfoById(id: number) {
    try {
      const chats = store.getState().chats;
      const activeChat = chats.filter((chat) => chat.id === id);

      return activeChat;
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default new ChatsController();
