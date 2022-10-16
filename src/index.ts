// Pages
import { ErrorPage } from "./pages/Error/Error";
import { LoginPage } from "./pages/Login/Login";
import { RegisterPage } from "./pages/Register/Register";
import { ProfilePage } from "./pages/Profile/Profile";
import { SettingsPage } from "./pages/Settings/Settings";
import { ProfileEditPassPage } from "./pages/ProfileEditPass/ProfileEditPass";
import { MessengerPage } from "./pages/Messenger/Messenger";

// Api
import AuthController from "./controllers/AuthController";

// Components
import Button from "./components/Button";
import Input from "./components/Input";
import Info from "./components/Info";
import DialogInfo from "./components/DialogInfo";
import LabelInput from "./components/LabelInput";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Notice from "./components/Notice";
import DialogHeader from "./components/DialogHeader";
import Dialog from "./components/Dialog";
import Users from "./components/Users";
import DialogMessage from "./components/DialogMessage";

// Utils
import Router from "./utils/Router";
import store from "./utils/Store";
import { registerComponent } from "./utils/RegisterComponent";
import { registerHelpers } from "./utils/RegisterHelpers";

registerComponent("Button", Button as any);
registerComponent("Input", Input as any);
registerComponent("Info", Info as any);
registerComponent("DialogInfo", DialogInfo as any);
registerComponent("LabelInput", LabelInput as any);
registerComponent("Link", Link as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Notice", Notice as any);
registerComponent("DialogHeader", DialogHeader as any);
registerComponent("Dialog", Dialog as any);
registerComponent("Users", Users as any);
registerComponent("DialogMessage", DialogMessage as any);
registerHelpers();

(window as any).store = store;

const authRedirectPaths = ["/", "/login"];

import "./index.scss";

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
