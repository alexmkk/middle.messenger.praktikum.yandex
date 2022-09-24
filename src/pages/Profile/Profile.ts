import { Block } from "../../utils/Block";
import template from "./profile.hbs";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import { RESOURCES_PATH } from "../../api/ResourcesAPI";
import { API_URL } from "../../utils/HTTPTransport";
import styles from "./styles.module.scss";

class ProfilePageBase extends Block {
  init() {
    AuthController.fetchUser();
  }

  render() {
    const handleLogout = () => {
      AuthController.logout();
    };
    const avatar_path = this.props.avatar;

    return this.compile(template, {
      ...this.props,
      avatar: `${API_URL}/${RESOURCES_PATH}${avatar_path}`,
      children: this.children,
      onLogout: handleLogout,
    });
  }
}

export const withUser = withStore((state) => ({
  ...state.user,
  styles,
}));

export const ProfilePage = withUser(ProfilePageBase);
