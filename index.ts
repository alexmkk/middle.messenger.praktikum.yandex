// Pages
import { ErrorPage } from "./src/pages/Error/Error";
import { LoginPage } from "./src/pages/Login/Login";
import { RegisterPage } from "./src/pages/Register/Register";
import { ProfilePage } from "./src/pages/Profile/Profile";
import { SettingsPage } from "./src/pages/Settings/Settings";
import { ProfileEditPassPage } from "./src/pages/ProfileEditPass/ProfileEditPass";
import { MessengerPage } from "./src/pages/Messenger/Messenger";

// Api
import AuthController from "./src/controllers/AuthController";

// Components
import Button from "./src/components/Button";
import Input from "./src/components/Input";
import Info from "./src/components/Info";
import DialogInfo from "./src/components/DialogInfo";
import LabelInput from "./src/components/LabelInput";
import Link from "./src/components/Link";
import Avatar from "./src/components/Avatar";
import Notice from "./src/components/Notice";
import Modal from "./src/components/Modal";
import DialogHeader from "./src/components/DialogHeader";
import Dialog from "./src/components/Dialog";
import Users from "./src/components/Users";

// Utils
import Router from "./src/utils/Router";
import store from "./src/utils/Store";
import { registerComponent } from "./src/utils/RegisterComponent";
import { registerHelpers } from "./src/utils/RegisterHelpers";

registerComponent("Button", Button as any);
registerComponent("Input", Input as any);
registerComponent("Info", Info as any);
registerComponent("DialogInfo", DialogInfo as any);
registerComponent("LabelInput", LabelInput as any);
registerComponent("Link", Link as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Notice", Notice as any);
registerComponent("Modal", Modal as any);
registerComponent("DialogHeader", DialogHeader as any);
registerComponent("Dialog", Dialog as any);
registerComponent("Users", Users as any);
registerHelpers();

(window as any).store = store;

const authRedirectPaths = ["/", "/login"];

window.addEventListener("DOMContentLoaded", async () => {
  Router.use("/", LoginPage)
    .use("/login", LoginPage)
    .use("/signup", RegisterPage)
    .use("/profile", ProfilePage)
    .use("/settings", SettingsPage)
    .use("/404", ErrorPage)
    .use("/messenger", MessengerPage)
    .use("/profileEditPass", ProfileEditPassPage);

  const authUser = await AuthController.fetchUser();

  if (authUser) {
    Router.start();

    if (authRedirectPaths.includes(window.location.pathname)) {
      Router.go("/messenger");
    }
  } else {
    Router.start();
    Router.go("/login");
  }
});
