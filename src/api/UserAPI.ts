import BaseAPI from "./BaseAPI";
import { IUser } from "./AuthAPI";

export type IUserProfileData = Omit<IUser, "id" | "avatar"> & {
  display_name: string;
};

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

type IUserInfoData = {
  display_name: string;
} & IUser;

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  updateProfile(data: IUserProfileData) {
    return this.http.put("/profile", { data });
  }

  updatePassword(data: IChangePassword) {
    return this.http.put("/password", { data });
  }

  read(id: string): Promise<IUserInfoData> {
    return this.http.get(`/user/${id}`, {});
  }

  updateAvatar(data: any) {
    return this.http.put("/profile/avatar", {
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
