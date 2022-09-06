// Pages
import { HomePage } from "./pages/Home/Home";
import { ErrorPage } from "./pages/Error/Error";
import { LoginPage } from "./pages/Login/Login";
import { SignInPage } from "./pages/SignIn/SignIn";
import { ProfilePage } from "./pages/Profile/Profile";
import { ProfileEditPage } from "./pages/ProfileEdit/ProfileEdit";
import { ProfileEditPassPage } from "./pages/ProfileEditPass/ProfileEditPass";
import { ChatPage } from "./pages/Chat/Chat";

// Components
import Button from "./src/components/Button";
import Input from "./src/components/Input";
import Info from "./src/components/Info";
import DialogInfo from "./src/components/DialogInfo";
import { LabelInput } from "./src/components/LabelInput/LabelInput";

import { registerComponent } from "./src/utils/RegisterComponent";

registerComponent("Button", Button as any);
registerComponent("Input", Input as any);
registerComponent("Info", Info as any);
registerComponent("DialogInfo", DialogInfo as any);
registerComponent("LabelInput", LabelInput as any);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#app")!;

  const pages = {
    home: new HomePage({ title: "Главная" }),
    login: new LoginPage({ title: "Авторизация" }),
    signin: new SignInPage({ title: "Регистрация" }),
    error404: new ErrorPage({ text: "Не туда попали", error: 400 }),
    error500: new ErrorPage({
      text: "Что-то пошло не так",
      error: 500,
    }),
    profile: new ProfilePage({ title: "Профиль" }),
    profileEdit: new ProfileEditPage({
      title: "Редактировать профиль",
    }),
    profileEditPass: new ProfileEditPassPage({ title: "Изменить пароль" }),
    chat: new ChatPage({ title: "Чат", isChatSelected: false }),
    chatSelected: new ChatPage({ title: "Чат", isChatSelected: true }),
  };

  const getPage = () => {
    const url = window.location.pathname.split("/")[1];
    if (url) {
      const formattedUrl = url.split(".")[0];

      root.append(pages[formattedUrl].getContent()!);
    } else {
      root.append(pages.home.getContent()!);
    }
  };

  getPage();
});
