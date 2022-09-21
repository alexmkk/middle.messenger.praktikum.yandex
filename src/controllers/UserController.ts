import API, { IChangePassword, IUserProfileData, UserAPI } from "../api/UserAPI";
import store from "../utils/Store";

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async updateProfile(data: IUserProfileData) {
    try {
      const updatedData = await this.api.updateProfile(data);

      store.set("user", updatedData);
    } catch (e) {
      console.error(e.message);
    }
  }

  async updatePassword(data: IChangePassword) {
    try {
      await this.api.updatePassword(data);
    } catch (e) {
      console.error(e.message);
    }
  }

  async updateAvatar(data: any) {
    try {
      await this.api.updateAvatar(data);
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default new UserController();
