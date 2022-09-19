// Pages
import { HomePage } from "./src/pages/Home/Home";
import { ErrorPage } from "./src/pages/Error/Error";
import { LoginPage } from "./src/pages/Login/Login";
import { RegisterPage } from "./src/pages/Register/Register";
import { ProfilePage } from "./src/pages/Profile/Profile";
import { SettingsPage } from "./src/pages/Settings/Settings";
import { ProfileEditPassPage } from "./src/pages/ProfileEditPass/ProfileEditPass";
import { ChatPage } from "./src/pages/Messenger/Messenger";

// Components
import Button from "./src/components/Button";
import Input from "./src/components/Input";
import Info from "./src/components/Info";
import DialogInfo from "./src/components/DialogInfo";
import LabelInput from "./src/components/LabelInput";
import Router from "./src/utils/Router";
import Link from "./src/components/Link";

import { registerComponent } from "./src/utils/RegisterComponent";

registerComponent("Button", Button as any);
registerComponent("Input", Input as any);
registerComponent("Info", Info as any);
registerComponent("DialogInfo", DialogInfo as any);
registerComponent("LabelInput", LabelInput as any);
registerComponent("Link", Link as any);

window.addEventListener("DOMContentLoaded", () => {
  Router.use("/", HomePage)
    .use("/login", LoginPage)
    .use("/signup", RegisterPage)
    .use("/profile", ProfilePage)
    .use("/settings", SettingsPage)
    .use("/profileEditPass", ProfileEditPassPage)
    .start();

  // const root = document.querySelector("#app")!;

  // const pages: any = {
  //   home: new HomePage({ title: "Главная" }),
  //   login: new LoginPage({ title: "Авторизация" }),
  //   signin: new SignInPage({ title: "Регистрация" }),
  //   error404: new ErrorPage({ text: "Не туда попали", error: 400 }),
  //   error500: new ErrorPage({
  //     text: "Что-то пошло не так",
  //     error: 500,
  //   }),
  //   profile: new ProfilePage({ title: "Профиль" }),
  //   profileEdit: new ProfileEditPage({
  //     title: "Редактировать профиль",
  //   }),
  //   profileEditPass: new ProfileEditPassPage({ title: "Изменить пароль" }),
  //   chat: new ChatPage({ title: "Чат", isChatSelected: false }),
  //   chatSelected: new ChatPage({ title: "Чат", isChatSelected: true }),
  // };
  //
  // const getPage = () => {
  //   const url = window.location.search;
  //
  //   if (url) {
  //     const formattedUrl = url.split("=")[1];
  //
  //     root.append(pages[formattedUrl].getContent()!);
  //   } else {
  //     root.append(pages.home.getContent()!);
  //   }
  // };
  //
  // getPage();
});
