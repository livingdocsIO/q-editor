import { inject } from "aurelia-framework";
import qEnv from "resources/qEnv.js";
import User from "resources/User.js";
import { HttpClient } from "aurelia-fetch-client";

@inject(User, HttpClient)
export default class QConfig {
  constructor(user, httpClient) {
    this.httpClient = httpClient;
    this.configLoaded = new Promise(resolve => {
      this.resolveConfigLoaded = resolve;
    });
    user.loaded.then(() => {
      return qEnv.QServerBaseUrl.then(QServerBaseUrl => {
        return this.httpClient.fetch(`${QServerBaseUrl}/editor/config`, {
          credentials: 'include'
        });
      });
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(config => {
        this.config = config;
        this.resolveConfigLoaded();
      })
      .catch(e => {
        this.config = null;
      });
  }

  get(key) {
    return this.configLoaded.then(() => {
      return this.config[key];
    });
  }
}
