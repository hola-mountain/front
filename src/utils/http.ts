import Axios from "axios";
import { errorAlert } from "./common";
import {
  Loading,
  // optional!, for example below
  // with custom spinner
  QSpinnerGears,
} from "quasar";
const instance = Axios.create();

instance.interceptors.request.use(
  function (config) {
    Loading.show({
      customClass: "loading",
      spinnerSize: 0,
      // other props
    });
    return config;
  },
  function (error) {
    Loading.hide();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    Loading.hide();
    return response;
  },
  function (error) {
    Loading.hide();
    const basicMsg = "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    console.log(error.status);
    console.log(error.response?.status);
    if (error.response?.status === 400) {
      const errorMsg = error.response?.data?.errorMessage || basicMsg;
      errorAlert(errorMsg);
    } else {
      errorAlert(basicMsg);
    }
    return Promise.reject(error);
  }
);

const baseUrl = "http://54.180.124.185:8080";
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
  put(uri: string, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
    };
    const promise = instance.put(url, params, config);
    return promise.then(({ data }) => data);
  },
  patch(uri: string, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
    };
    const promise = instance.patch(url, params, config);
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
