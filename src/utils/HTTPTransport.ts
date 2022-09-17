import { queryString } from "./QueryString";
import { RecordString } from "../types/types";

enum Methods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

interface IOption {
  method: Methods;
  data?: RecordString;
  timeout?: number;
  headers?: RecordString;
}

export class HTTPTransport {
  get = (
    url: string,
    options: IOption = {
      method: Methods.GET,
    }
  ) => {
    const newUrl = options.data ? url + queryString(options.data) : url;

    return this.request(newUrl, { ...options }, options.timeout);
  };

  put = (
    url: string,
    options: IOption = {
      method: Methods.PUT,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  post = (
    url: string,
    options: IOption = {
      method: Methods.POST,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  delete = (
    url: string,
    options: IOption = {
      method: Methods.DELETE,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  request = (url: string, options: IOption = { method: Methods.GET }, timeout = 5000) => {
    const { headers, data, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method || Methods.GET, url);
      xhr.setRequestHeader("Content-Type", "text/plain");

      if (headers) {
        Object.entries(headers).forEach((item) => {
          const [key, value] = item;
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.timeout = timeout;

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.onload = function () {
        resolve(xhr);
      };

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
