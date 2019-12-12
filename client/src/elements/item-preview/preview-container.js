import { bindable, useShadowDOM, inject } from "aurelia-framework";
import qEnv from "resources/qEnv.js";
import QConfig from "resources/QConfig.js";

@useShadowDOM()
@inject(Element, QConfig)
export class PreviewContainer {
  @bindable width;
  @bindable scaleToFit;
  @bindable renderingInfo;
  @bindable loadingStatus;
  @bindable target;
  @bindable error;

  insertedElements = [];
  stylesheetRules = [];

  constructor(element, qConfig) {
    this.element = element;
    this.qConfig = qConfig;
    this.id = `preview-container-${Math.floor(Math.random() * 10 ** 9)}`;
    this.element.setAttribute("id", this.id);
    this.currentScaleFactor = 1;
  }

  async attached() {
    this.QServerBaseUrl = await qEnv.QServerBaseUrl;
    this.initScaleToFit();
    this.showPreview(this.renderingInfo);
  }

  async detached() {
    this.unobservePreviewResize();
  }

  widthChanged(width) {
    if (!width) {
      return;
    }
    if (Number.isNaN(parseFloat(width))) {
      if (width === 'auto') {
        this.cssWidth = '100%';
      } else if (width.endsWith('%')) {
        this.cssWidth = width;
      }
    } else {
      this.cssWidth = `${width}px`;
    }
  }

  scaleToFitChanged() {
    this.initScaleToFit();
  }

  renderingInfoChanged(renderingInfo) {
    this.unobservePreviewResize();
    if (this.previewHolder) {
      this.previewHolder.innerHTML = "";
    }
    this.initScaleToFit();
    this.showPreview(renderingInfo);
  }

  targetChanged() {
    let color = "white";
    try {
      if (this.target.context.background.color) {
        color = this.target.context.background.color;
      }
    } catch (e) {
      // nevermind, default color already set to white
    }
    try {
      if (this.target.preview.background.color) {
        color = this.target.preview.background.color;
      }
    } catch (e) {
      // nevermind, default color already set to white
    }

    this.previewColor = color;
  }

  async _toSophieUrl({sophieModules}) {
    if (!Array.isArray(sophieModules) || !sophieModules.length) return;
    const sophieConfig = await this.qConfig.get("sophie");
    if (!sophieConfig || !sophieConfig.buildServiceBaseUrl) return;

    const sophieModulesString = sophieModules.map(({name, submodules}) => {
      if (!submodules || !submodules.length) return name;
      return `${sophieModule.name}[${sophieModule.submodules.join("+")}]`;
    }).join(',');

    return `${sophieConfig.buildServiceBaseUrl}/bundle/${sophieModulesString}.css`;
  }

  async showPreview(renderingInfo) {
    if (!this.previewHolder) return;
    if (!renderingInfo) renderingInfo = {};

    // remove all previously inserted elements
    while (this.insertedElements.length > 0) {
      let element = this.insertedElements.pop();
      element.parentNode.removeChild(element);
    }

    // load sophie modules
    const sophieUrl = renderingInfo.sophieModules && await this._toSophieUrl(renderingInfo);
    if (sophieUrl) {
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = `${
        sophieConfig.buildServiceBaseUrl
      }/bundle/${sophieModulesString}.css`;
      this.insertedElements.push(link);
      this.element.shadowRoot.appendChild(link);
    }

    // load the stylesheets
    if (Array.isArray(renderingInfo.stylesheets)) {
      renderingInfo.stylesheets
        .map(stylesheet => {
          if (!stylesheet.url && stylesheet.path) {
            stylesheet.url = `${this.QServerBaseUrl}${stylesheet.path}`;
          }
          return stylesheet;
        })
        .map(stylesheet => {
          if (stylesheet.url) {
            let link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = stylesheet.url;
            this.insertedElements.push(link);
            this.element.shadowRoot.appendChild(link);
          } else if (stylesheet.content) {
            let style = document.createElement("style");
            style.type = "text/css";
            style.appendChild(document.createTextNode(stylesheet.content));
            this.insertedElements.push(style);
            this.element.shadowRoot.appendChild(style);
          }
        });
    }

    // add the markup if any
    if (renderingInfo.markup) {
      this.previewHolder.innerHTML = renderingInfo.markup;
    } else {
      this.previewHolder.innerHTML = "";
    }

    // load the scripts one after the other
    if (Array.isArray(renderingInfo.scripts)) {
      renderingInfo.scripts = renderingInfo.scripts
        .filter(script => script.loadInEditorPreview !== false)
        .map(script => {
          if (script.path) {
            script.url = `${this.QServerBaseUrl}${script.path}`;
          }
          return script;
        });

      this.loadAllScripts(renderingInfo.scripts);
    }
  }

  loadAllScripts(scripts, callback = null, index = 0) {
    if (
      scripts &&
      scripts[index] &&
      (scripts[index].url || scripts[index].content)
    ) {
      let script = scripts[index];
      let scriptElement = document.createElement("script");

      if (script.url) {
        scriptElement.src = script.url;
        script.async = true;

        scriptElement.onload = () => {
          this.loadAllScripts(scripts, callback, index + 1);
        };

        this.insertedElements.push(scriptElement);
        this.element.shadowRoot.appendChild(scriptElement);
      } else if (script.content) {
        script.content = script.content.replace(
          new RegExp("document.querySelector", "g"),
          `document.querySelector('#${this.id}').shadowRoot.querySelector`
        );
        script.content = script.content.replace(
          new RegExp("document.getElementById", "g"),
          `document.querySelector('#${this.id}').shadowRoot.getElementById`
        );

        scriptElement.innerHTML = script.content;
        this.insertedElements.push(scriptElement);
        this.element.shadowRoot.appendChild(scriptElement);
        this.loadAllScripts(scripts, callback, index + 1);
      }
    } else if (typeof callback === "function") {
      callback();
    }
  }

  initScaleToFit() {
    if (!this.previewHolder) {
      return;
    }
    if (this.scaleToFit) {
      this.currentScaleFactor = 1;
      // set the applying state so opacity can fade
      this.applyingScaleToFit = true;
      this.observePreviewResize(this.applyScaleToFit.bind(this));
      this.applyScaleToFit();
    } else {
      this.resetScaleToFit();
    }
  }

  applyScaleToFit() {
    const elementToScale = this.previewHolder.firstChild;
    if (!elementToScale) {
      return;
    }
    const elementToScaleWidth = elementToScale.getBoundingClientRect().width;
    // the element might not yet have a width, in this case we do not want to do anything just yet
    if (!elementToScaleWidth) {
      return;
    }

    // we need to calculate using the current scale factor since getBoundingClientRect is computed after any transforms
    const scaleFactor = this.previewHolder.getBoundingClientRect().width / elementToScaleWidth * this.currentScaleFactor;

    // nothing to do if scaleFactor didn't change
    if (scaleFactor === this.currentScaleFactor) {
      return;
    }

    requestAnimationFrame(() => {
      elementToScale.style.display = 'block';
      elementToScale.style.transformOrigin = '0 0';
      elementToScale.style.transform = `scale(${scaleFactor})`;
      elementToScale.style.webkitTransform = `scale(${scaleFactor})`;
      elementToScale.style.MozTransform = `scale(${scaleFactor})`;
      this.currentScaleFactor = scaleFactor;
      this.applyingScaleToFit = false;
    });
  }

  resetScaleToFit() {
    const elementToScale = this.previewHolder.firstChild;
    if (!elementToScale) {
      return;
    }
    elementToScale.style.transform = `none`;
    elementToScale.style.webkitTransform = `none`;
    elementToScale.style.MozTransform = `none`;
    this.unobservePreviewResize();
  }

  async observePreviewResize(cb) {
    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(entries => {
        cb();
      });
      this.resizeObserver.observe(this.previewHolder);
      await this.graphicElementAvailable();
      this.resizeObserver.observe(this.previewHolder.firstChild);
    }
  }

  unobservePreviewResize() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
  }

  rafAsync() {
    return new Promise(resolve => {
      requestAnimationFrame(resolve);
    });
  }

  async graphicElementAvailable() {
    while (this.previewHolder.firstChild === null) {
      await this.rafAsync();
    }
    return true;
  }


}
