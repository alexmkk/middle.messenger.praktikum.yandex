import BaseAPI from "./BaseAPI";

export const RESOURCES_PATH = "resources";

export class ResourcesAPI extends BaseAPI {
  constructor() {
    super(`/${RESOURCES_PATH}`);
  }

  read(path: string): Promise<any> {
    return this.http.get(`/${path}`, {});
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ResourcesAPI();
