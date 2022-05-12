import Axios from "axios";
import { errorAlert } from "./common";
const instance = Axios.create();

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorAlert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    return Promise.reject(error);
  }
);

const baseUrl = "http://15.165.192.190:8080";
// const baseUrl = import.meta.env.VITE_BASE_API_URL;
const defaultHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "*/*",
};

const httpInstance = {
  get(uri: string, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
      params,
    };

    const promise = instance.get(url, config);
    return promise.then(({ data }) => data);
  },
  post(uri: string, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
    };
    const promise = instance.post(url, params, config);
    return promise.then(({ data }) => data);
  },
  delete(uri: string, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
      params,
    };
    const promise = instance.delete(url, config);
    return promise.then(({ data }) => data);
  },
};

export const axios = instance;
export const http = httpInstance;
export default http;
