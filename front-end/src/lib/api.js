/*eslint-disable*/
import http from "axios";


const defaultTimeoutAPI = 100000;

class API {
  static baseHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  static baseUrl() {
    return "";
  }
  static get(route, headers, params, timeout, responseType = null) {
    return this.api("get", route, headers, params, {}, timeout, responseType);
  }

  static put(route, headers, params, data, timeout, responseType = null) {
    return this.api("put", route, headers, params, data, timeout, responseType);
  }

  static post(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "post",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static patch(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "patch",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static delete(route, headers, params, data, timeout, responseType = null) {
    return this.api(
      "delete",
      route,
      headers,
      params,
      data,
      timeout,
      responseType
    );
  }

  static api(
    requestType,
    route,
    headers,
    params,
    data,
    timeout = defaultTimeoutAPI,
    responseType
  ) {
    const host = API.baseUrl();
    const url = `${host}${route}`;
    const baseHeaders = API.baseHeaders();

    const requestConfig = {
      headers: headers ? Object.assign({}, baseHeaders, headers) : baseHeaders,
    };

    if (params) {
      requestConfig.params = params;
    }

    if (responseType) {
      requestConfig.responseType = responseType;
    }

    http.create();
    http.defaults.timeout = timeout;

    if (requestType === "get" || requestType === "delete") {
      return http[requestType](url, requestConfig)
        .then(response => {
          return response;
        })
        .catch(error => {
          console.log("error for get", error);
          // const _error = customErrorHandler.getErrorDetails(error);
          return Promise.reject(error);
        });
    }

    return http[requestType](url, data, requestConfig)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log("error for post", error);
        // const _error = customErrorHandler.getErrorDetails(error);
        return Promise.reject(error);
      });
  }
}

export default API;
