enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

function queryStringify(data) {
  return Object.keys(data)
    .reduce((prev, cur) => `${prev}${cur}=${data[cur]}&`, "?")
    .slice(0, -1);
}

interface IOption {
  method: METHODS;
  data?: unknown;
  timeout?: number;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  get = (
    url: string,
    options: IOption = {
      method: METHODS.GET,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  put = (
    url: string,
    options: IOption = {
      method: METHODS.PUT,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  post = (
    url: string,
    options: IOption = {
      method: METHODS.POST,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  delete = (
    url: string,
    options: IOption = {
      method: METHODS.DELETE,
    }
  ) => {
    return this.request(url, { ...options }, options.timeout);
  };

  request = (
    url,
    options: IOption = { method: METHODS.GET },
    timeout = 5000
  ) => {
    const { headers, data, method } = options;
    const newUrl =
      method === METHODS.GET && data ? url + queryStringify(data) : url;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method || METHODS.GET, newUrl);
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

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
