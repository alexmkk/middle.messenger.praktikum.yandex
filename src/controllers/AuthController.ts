import API, { AuthAPI, ISigninData, ISignupData } from "../api/AuthAPI";
import store from "../utils/Store";
import router from "../utils/Router";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);

      router.go("/profile");
    } catch (e) {
      console.error(e.message);
    }
  }

  async signup(data: ISignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go("/profile");
    } catch (e) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();

      store.set("user", user);

      return user;
    } catch (e) {
      console.error(e.message);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      router.go("/login");
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
