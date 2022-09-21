import { Block } from "../../utils/Block";
import template from "./settings.hbs";
import { getFormData } from "../../helpers/getFormData";
import UserController from "../../controllers/UserController";
import { IUserProfileData } from "../../api/UserAPI";
import { withUser } from "../Profile/Profile";

export class SettingsPageBase extends Block {
  handleSubmit(e: Event) {
    e.preventDefault();
    const updateProfileData = getFormData();

    // UserController.updateProfile(updateProfileData as IUserProfileData);

    const selectedFile = document.getElementById("avatar")!.files[0];
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    UserController.updateAvatar(formData);
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      onClick: this.handleSubmit,
    });
  }
}

export const SettingsPage = withUser(SettingsPageBase);
