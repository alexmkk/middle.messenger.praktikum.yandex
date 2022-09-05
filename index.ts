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

  const homePage = new HomePage({ title: "Главная" });
  const loginPage = new LoginPage({ title: "Авторизация" });
  const signInPage = new SignInPage({ title: "Регистрация" });
  const errorPage404 = new ErrorPage({ text: "Не туда попали", error: 400 });
  const errorPage500 = new ErrorPage({
    text: "Что-то пошло не так",
    error: 500,
  });
  const profilePage = new ProfilePage({ title: "Профиль" });
  const profileEditPage = new ProfileEditPage({
    title: "Редактировать профиль",
  });
  const profileEditPass = new ProfileEditPassPage({ title: "Изменить пароль" });
  const chatPage = new ChatPage({ title: "Чат" });

  root.append(loginPage.getContent()!);
});
