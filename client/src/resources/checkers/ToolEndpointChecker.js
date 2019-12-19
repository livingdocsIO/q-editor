import { inject } from "aurelia-framework";
import qEnv from "resources/qEnv.js";
import CurrentItemProvider from "resources/CurrentItemProvider.js";

@inject(CurrentItemProvider)
export default class ToolEndpointChecker {
  reevaluateCallbacks = [];

  constructor(currentItemProvider) {
    this.currentItemProvider = currentItemProvider;
  }

  triggerReevaluation() {
    for (let cb of this.reevaluateCallbacks) {
      cb();
    }
  }

  registerReevaluateCallback(cb) {
    this.reevaluateCallbacks.push(cb);
    return cb;
  }

  unregisterReevaluateCallback(id) {
    const index = this.reevaluateCallbacks.indexOf(id);
    if (index > -1) {
      this.reevaluateCallbacks.splice(index, 1);
    }
  }

  async check(config, pointer) {
    const QServerBaseUrl = await qEnv.QServerBaseUrl;
    const item = this.currentItemProvider.getCurrentItem().conf;
    const toolRequestBaseUrl = `${QServerBaseUrl}/tools/${item.tool}`;
    const options = {
      method: "GET"
    };

    if (Array.isArray(config.fields) && config.fields.length > 0) {
      const dataForEndpoint = {
        item: this.currentItemProvider.getCurrentItemByFields(config.fields)
      };
      options.method = "POST";
      if (config.hasOwnProperty("options")) {
        dataForEndpoint.options = config.options;
      }
      options.body = JSON.stringify(dataForEndpoint);
    }

    if (Array.isArray(config.pointers) && config.pointers.length > 0) {
      const dataForEndpoint = {
        data: config.pointers.map(ptr => {
          // handle parts of relative pointers here: https://tools.ietf.org/id/draft-handrews-relative-json-pointer-00.html
          if (Number(ptr)) {
            ptr = pointer.split('/').slice(0, Number(ptr) * -1).join('/');
          }
          return this.currentItemProvider.getDataByPointer(ptr);
        })
      };
      options.method = "POST";
      if (config.hasOwnProperty("options")) {
        dataForEndpoint.options = config.options;
      }
      options.body = JSON.stringify(dataForEndpoint);
    }

    if (config.pointer) {
      let ptr = config.pointer;
      // handle parts of relative pointers here: https://tools.ietf.org/id/draft-handrews-relative-json-pointer-00.html
      if (Number(ptr)) {
        ptr = pointer.split('/').slice(0, Number(ptr) * -1).join('/');
      }
      const dataForEndpoint = {
        data: this.currentItemProvider.getDataByPointer(ptr)
      };
      options.method = "POST";
      if (config.hasOwnProperty("options")) {
        dataForEndpoint.options = config.options;
      }
      options.body = JSON.stringify(dataForEndpoint);
    }

    const response = await fetch(
      `${toolRequestBaseUrl}/${config.endpoint}`,
      options
    );

    if (response.status !== 200) {
      throw new Error(response.statusMessage);
    }
    try {
      return await response.json();
    } catch (e) {
      return null;
    }
  }
}
