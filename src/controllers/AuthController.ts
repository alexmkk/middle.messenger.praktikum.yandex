import API, { AuthAPI, ISigninData, ISignupData } from "../api/AuthAPI";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    await this.api.signin(data);
  }

  async signup(data: ISignupData) {
    await this.api.signup(data);
  }

  async fetchUser() {
    await this.api.read();
  }

  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();
