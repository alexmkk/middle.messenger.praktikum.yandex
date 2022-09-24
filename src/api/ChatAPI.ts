import BaseAPI from "./BaseAPI";

export interface IChatsGet {
  offset?: number;
  limit?: number;
  title?: string;
}

export interface IChatUser {
  offset: number;
  limit: number;
  name: string;
  email: string;
}

export class ChatAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  getChats(data: IChatsGet) {
    return this.http.get("", { data });
  }

  getArchiveChats(data: IChatsGet) {
    return this.http.get("/archive", { data });
  }

  getChatFiles(id: number) {
    return this.http.get(`/${id}/files`, {});
  }

  createChat(title: string) {
    return this.http.post("", { data: { title } });
  }

  deleteChat(id: number) {
    return this.http.delete("", { data: { chatId: id } });
  }

  archiveChat(id: number) {
    return this.http.post("/archive", { data: { chatId: id } });
  }

  unArchiveChat(id: number) {
    return this.http.post("/unarchive", { data: { chatId: id } });
  }

  getChatUsers(id: number, data: IChatUser) {
    return this.http.get(`/${id}/users`, { data });
  }

  getNewMessagesCount(id: number) {
    return this.http.get(`/new/${id}`, {});
  }

  uploadChatAvatar(id: FormData, data: FormData) {
    return this.http.put("/avatar", {
      data: {
        ...data,
        chatId: id,
      },
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  addUsersToChat(data: { users: number[]; chatId: number }) {
    return this.http.put("/users", { data });
  }

  deleteUsersFromChat(data: { users: number[]; chatId: number }) {
    return this.http.delete("/users", { data });
  }

  read(id: string) {
    return this.http.get(`/${id}/common`, {});
  }

  chatUsers(id: number) {
    return this.http.post(`/token/${id}`, {});
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ChatAPI();
