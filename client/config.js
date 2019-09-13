System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "ajv": "npm:ajv@5.5.2",
    "array2d": "npm:array2d@0.0.5",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-authentication": "npm:aurelia-authentication@3.8.3",
    "aurelia-binding": "npm:aurelia-binding@2.3.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.3",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
    "aurelia-dialog": "npm:aurelia-dialog@1.1.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.8.2",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
    "aurelia-i18n": "npm:aurelia-i18n@2.3.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
    "aurelia-logging": "npm:aurelia-logging@1.5.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
    "aurelia-notification": "npm:aurelia-notification@1.1.0",
    "aurelia-pal": "npm:aurelia-pal@1.8.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
    "aurelia-path": "npm:aurelia-path@1.1.3",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
    "aurelia-router": "npm:aurelia-router@1.7.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.11.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
    "aurelia-testing": "npm:aurelia-testing@1.0.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "codemirror": "npm:codemirror@5.41.0",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.37",
    "dropzone": "npm:dropzone@5.5.1",
    "get-value": "npm:get-value@3.0.1",
    "handsontable": "github:handsontable/handsontable@5.0.2",
    "heyman/leaflet-areaselect": "github:heyman/leaflet-areaselect@master",
    "i18next": "npm:i18next@9.1.0",
    "i18next-fetch-backend": "npm:i18next-fetch-backend@0.0.1",
    "leaflet": "github:Leaflet/Leaflet@1.3.1",
    "leaflet-geocoder-mapzen": "npm:leaflet-geocoder-mapzen@1.8.0",
    "leaflet-search": "npm:leaflet-search@2.3.7",
    "mixin-deep": "npm:mixin-deep@2.0.0",
    "moment": "npm:moment@2.22.0",
    "set-value": "npm:set-value@3.0.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.0"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:ajv@5.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "co": "npm:co@4.6.0",
      "fast-deep-equal": "npm:fast-deep-equal@1.1.0",
      "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-schema-traverse": "npm:json-schema-traverse@0.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:array2d@0.0.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:assert@1.5.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-api@3.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.8.2",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "extend": "npm:extend@3.0.2"
    },
    "npm:aurelia-authentication@3.8.3": {
      "aurelia-api": "npm:aurelia-api@3.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.8.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.11.0",
      "extend": "npm:extend@3.0.2",
      "jwt-decode": "npm:jwt-decode@2.2.0"
    },
    "npm:aurelia-binding@2.3.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:aurelia-bootstrapper@2.3.3": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.11.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0"
    },
    "npm:aurelia-dependency-injection@1.4.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-dialog@1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-fetch-client@1.8.2": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-framework@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-history-browser@1.4.0": {
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-i18n@2.3.2": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.11.0",
      "i18next": "npm:i18next@9.1.0",
      "intl": "npm:intl@1.2.5"
    },
    "npm:aurelia-loader-default@1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-loader@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-path": "npm:aurelia-path@1.1.3"
    },
    "npm:aurelia-logging-console@1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-metadata@1.0.6": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-notification@1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-i18n": "npm:aurelia-i18n@2.3.2",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "extend": "npm:extend@3.0.2",
      "humane-js": "npm:humane-js@3.2.2"
    },
    "npm:aurelia-pal-browser@1.8.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-polyfills@1.3.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "aurelia-path": "npm:aurelia-path@1.1.3"
    },
    "npm:aurelia-router@1.7.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2"
    },
    "npm:aurelia-task-queue@1.3.3": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-templating-binding@1.5.3": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-templating-resources@1.11.0": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-templating-router@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:aurelia-templating@1.10.2": {
      "aurelia-binding": "npm:aurelia-binding@2.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.3",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:aurelia-testing@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.13"
    },
    "npm:codemirror@5.41.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dropzone@5.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fast-json-stable-stringify@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:get-value@3.0.1": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:i18next-fetch-backend@0.0.1": {
      "i18next-xhr-backend": "npm:i18next-xhr-backend@1.5.1"
    },
    "npm:i18next@9.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-plain-object@2.0.4": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:json-schema-traverse@0.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jwt-decode@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:leaflet-geocoder-mapzen@1.8.0": {
      "leaflet": "npm:leaflet@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:leaflet-search@2.3.7": {
      "leaflet": "npm:leaflet@1.3.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-value@3.0.0": {
      "is-plain-object": "npm:is-plain-object@2.0.4"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "aurelia-bc7de16547.js": [
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:aurelia-animator-css@1.0.4.js",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-api@3.2.1.js",
      "npm:aurelia-api@3.2.1/aurelia-api.js",
      "npm:aurelia-authentication@3.8.3.js",
      "npm:aurelia-authentication@3.8.3/aurelia-authentication.js",
      "npm:aurelia-authentication@3.8.3/authFilterValueConverter.js",
      "npm:aurelia-authentication@3.8.3/authenticatedFilterValueConverter.js",
      "npm:aurelia-authentication@3.8.3/authenticatedValueConverter.js",
      "npm:aurelia-binding@2.3.1.js",
      "npm:aurelia-binding@2.3.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.3.3.js",
      "npm:aurelia-bootstrapper@2.3.3/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.4.2.js",
      "npm:aurelia-dependency-injection@1.4.2/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.1.0.js",
      "npm:aurelia-dialog@1.1.0/attach-focus.js",
      "npm:aurelia-dialog@1.1.0/aurelia-dialog.js",
      "npm:aurelia-dialog@1.1.0/dialog-cancel-error.js",
      "npm:aurelia-dialog@1.1.0/dialog-close-error.js",
      "npm:aurelia-dialog@1.1.0/dialog-configuration.js",
      "npm:aurelia-dialog@1.1.0/dialog-controller.js",
      "npm:aurelia-dialog@1.1.0/dialog-renderer.js",
      "npm:aurelia-dialog@1.1.0/dialog-service.js",
      "npm:aurelia-dialog@1.1.0/dialog-settings.js",
      "npm:aurelia-dialog@1.1.0/lifecycle.js",
      "npm:aurelia-dialog@1.1.0/renderer.js",
      "npm:aurelia-dialog@1.1.0/ux-dialog-body.js",
      "npm:aurelia-dialog@1.1.0/ux-dialog-footer.js",
      "npm:aurelia-dialog@1.1.0/ux-dialog-header.js",
      "npm:aurelia-dialog@1.1.0/ux-dialog.js",
      "npm:aurelia-event-aggregator@1.0.3.js",
      "npm:aurelia-event-aggregator@1.0.3/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.8.2.js",
      "npm:aurelia-fetch-client@1.8.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.3.1.js",
      "npm:aurelia-framework@1.3.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.4.0.js",
      "npm:aurelia-history-browser@1.4.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.2.1.js",
      "npm:aurelia-history@1.2.1/aurelia-history.js",
      "npm:aurelia-i18n@2.3.2.js",
      "npm:aurelia-i18n@2.3.2/aurelia-i18n-loader.js",
      "npm:aurelia-i18n@2.3.2/aurelia-i18n.js",
      "npm:aurelia-i18n@2.3.2/base-i18n.js",
      "npm:aurelia-i18n@2.3.2/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@2.3.2/df.js",
      "npm:aurelia-i18n@2.3.2/i18n.js",
      "npm:aurelia-i18n@2.3.2/nf.js",
      "npm:aurelia-i18n@2.3.2/relativeTime.js",
      "npm:aurelia-i18n@2.3.2/rt.js",
      "npm:aurelia-i18n@2.3.2/t.js",
      "npm:aurelia-i18n@2.3.2/utils.js",
      "npm:aurelia-loader-default@1.2.1.js",
      "npm:aurelia-loader-default@1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.2.js",
      "npm:aurelia-loader@1.0.2/aurelia-loader.js",
      "npm:aurelia-logging-console@1.1.1.js",
      "npm:aurelia-logging-console@1.1.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.2.js",
      "npm:aurelia-logging@1.5.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.6.js",
      "npm:aurelia-metadata@1.0.6/aurelia-metadata.js",
      "npm:aurelia-notification@1.1.0.js",
      "npm:aurelia-notification@1.1.0/aurelia-notification.js",
      "npm:aurelia-pal-browser@1.8.1.js",
      "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.2.js",
      "npm:aurelia-pal@1.8.2/aurelia-pal.js",
      "npm:aurelia-path@1.1.3.js",
      "npm:aurelia-path@1.1.3/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.4.js",
      "npm:aurelia-polyfills@1.3.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.2.js",
      "npm:aurelia-route-recognizer@1.3.2/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.7.1.js",
      "npm:aurelia-router@1.7.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.3.js",
      "npm:aurelia-task-queue@1.3.3/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.5.3.js",
      "npm:aurelia-templating-binding@1.5.3/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.11.0.js",
      "npm:aurelia-templating-resources@1.11.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-router@1.4.0.js",
      "npm:aurelia-templating-router@1.4.0/aurelia-templating-router.js",
      "npm:aurelia-templating@1.10.2.js",
      "npm:aurelia-templating@1.10.2/aurelia-templating.js",
      "npm:extend@3.0.2.js",
      "npm:extend@3.0.2/index.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:i18next-fetch-backend@0.0.1.js",
      "npm:i18next-fetch-backend@0.0.1/lib/index.js",
      "npm:i18next-xhr-backend@1.5.1.js",
      "npm:i18next-xhr-backend@1.5.1/dist/commonjs/ajax.js",
      "npm:i18next-xhr-backend@1.5.1/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@1.5.1/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@1.5.1/index.js",
      "npm:i18next@9.1.0.js",
      "npm:i18next@9.1.0/dist/commonjs/BackendConnector.js",
      "npm:i18next@9.1.0/dist/commonjs/CacheConnector.js",
      "npm:i18next@9.1.0/dist/commonjs/EventEmitter.js",
      "npm:i18next@9.1.0/dist/commonjs/Interpolator.js",
      "npm:i18next@9.1.0/dist/commonjs/LanguageUtils.js",
      "npm:i18next@9.1.0/dist/commonjs/PluralResolver.js",
      "npm:i18next@9.1.0/dist/commonjs/ResourceStore.js",
      "npm:i18next@9.1.0/dist/commonjs/Translator.js",
      "npm:i18next@9.1.0/dist/commonjs/defaults.js",
      "npm:i18next@9.1.0/dist/commonjs/i18next.js",
      "npm:i18next@9.1.0/dist/commonjs/index.js",
      "npm:i18next@9.1.0/dist/commonjs/logger.js",
      "npm:i18next@9.1.0/dist/commonjs/postProcessor.js",
      "npm:i18next@9.1.0/dist/commonjs/utils.js",
      "npm:i18next@9.1.0/index.js",
      "npm:jwt-decode@2.2.0.js",
      "npm:jwt-decode@2.2.0/lib/atob.js",
      "npm:jwt-decode@2.2.0/lib/base64_url_decode.js",
      "npm:jwt-decode@2.2.0/lib/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js"
    ],
    "resources-c0d852b46a.js": [
      "dialogs/confirm-dialog.js",
      "github:jspm/nodelibs-url@0.1.0.js",
      "github:jspm/nodelibs-url@0.1.0/index.js",
      "npm:ajv@5.5.2.js",
      "npm:ajv@5.5.2/lib/$data.js",
      "npm:ajv@5.5.2/lib/ajv.js",
      "npm:ajv@5.5.2/lib/cache.js",
      "npm:ajv@5.5.2/lib/compile/_rules.js",
      "npm:ajv@5.5.2/lib/compile/async.js",
      "npm:ajv@5.5.2/lib/compile/error_classes.js",
      "npm:ajv@5.5.2/lib/compile/formats.js",
      "npm:ajv@5.5.2/lib/compile/index.js",
      "npm:ajv@5.5.2/lib/compile/resolve.js",
      "npm:ajv@5.5.2/lib/compile/rules.js",
      "npm:ajv@5.5.2/lib/compile/schema_obj.js",
      "npm:ajv@5.5.2/lib/compile/ucs2length.js",
      "npm:ajv@5.5.2/lib/compile/util.js",
      "npm:ajv@5.5.2/lib/dotjs/_limit.js",
      "npm:ajv@5.5.2/lib/dotjs/_limitItems.js",
      "npm:ajv@5.5.2/lib/dotjs/_limitLength.js",
      "npm:ajv@5.5.2/lib/dotjs/_limitProperties.js",
      "npm:ajv@5.5.2/lib/dotjs/allOf.js",
      "npm:ajv@5.5.2/lib/dotjs/anyOf.js",
      "npm:ajv@5.5.2/lib/dotjs/const.js",
      "npm:ajv@5.5.2/lib/dotjs/contains.js",
      "npm:ajv@5.5.2/lib/dotjs/custom.js",
      "npm:ajv@5.5.2/lib/dotjs/dependencies.js",
      "npm:ajv@5.5.2/lib/dotjs/enum.js",
      "npm:ajv@5.5.2/lib/dotjs/format.js",
      "npm:ajv@5.5.2/lib/dotjs/items.js",
      "npm:ajv@5.5.2/lib/dotjs/multipleOf.js",
      "npm:ajv@5.5.2/lib/dotjs/not.js",
      "npm:ajv@5.5.2/lib/dotjs/oneOf.js",
      "npm:ajv@5.5.2/lib/dotjs/pattern.js",
      "npm:ajv@5.5.2/lib/dotjs/properties.js",
      "npm:ajv@5.5.2/lib/dotjs/propertyNames.js",
      "npm:ajv@5.5.2/lib/dotjs/ref.js",
      "npm:ajv@5.5.2/lib/dotjs/required.js",
      "npm:ajv@5.5.2/lib/dotjs/uniqueItems.js",
      "npm:ajv@5.5.2/lib/dotjs/validate.js",
      "npm:ajv@5.5.2/lib/keyword.js",
      "npm:ajv@5.5.2/lib/patternGroups.js",
      "npm:ajv@5.5.2/lib/refs/$data.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:ajv@5.5.2/lib/refs/json-schema-draft-06.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:co@4.6.0.js",
      "npm:co@4.6.0/index.js",
      "npm:fast-deep-equal@1.1.0.js",
      "npm:fast-deep-equal@1.1.0/index.js",
      "npm:fast-json-stable-stringify@2.0.0.js",
      "npm:fast-json-stable-stringify@2.0.0/index.js",
      "npm:get-value@3.0.1.js",
      "npm:get-value@3.0.1/index.js",
      "npm:is-plain-object@2.0.4.js",
      "npm:is-plain-object@2.0.4/index.js",
      "npm:isobject@3.0.1.js",
      "npm:isobject@3.0.1/index.js",
      "npm:json-schema-traverse@0.3.1.js",
      "npm:json-schema-traverse@0.3.1/index.js",
      "npm:punycode@1.3.2.js",
      "npm:punycode@1.3.2/punycode.js",
      "npm:querystring@0.2.0.js",
      "npm:querystring@0.2.0/decode.js",
      "npm:querystring@0.2.0/encode.js",
      "npm:querystring@0.2.0/index.js",
      "npm:set-value@3.0.0.js",
      "npm:set-value@3.0.0/index.js",
      "npm:url@0.10.3.js",
      "npm:url@0.10.3/url.js",
      "resources/Auth.js",
      "resources/CurrentItemProvider.js",
      "resources/EmbedCodeGenerator.js",
      "resources/IdGenerator.js",
      "resources/Item.js",
      "resources/ItemActionController.js",
      "resources/ItemStore.js",
      "resources/ObjectFromSchemaGenerator.js",
      "resources/QConfig.js",
      "resources/QTargets.js",
      "resources/Statistics.js",
      "resources/ToolsInfo.js",
      "resources/User.js",
      "resources/checkers/ToolEndpointChecker.js",
      "resources/qEnv.js",
      "resources/schema-editor-decorators/resolveDynamicEnum.js",
      "resources/schemaEditorDecorators.js"
    ],
    "q-editor-bundle-2fcfed0cc2.js": [
      "dialogs/item-dialog.js",
      "elements/item-preview/item-preview.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/item-preview/item-preview.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/item-preview/item-preview.js",
      "elements/item-preview/preview-container.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/item-preview/preview-container.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/item-preview/preview-container.js",
      "elements/organisms/tool-status-bar.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/tool-status-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/tool-status-bar.js",
      "elements/schema-editor/helpers.js",
      "elements/schema-editor/schema-editor-array.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-array.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-array.js",
      "elements/schema-editor/schema-editor-base64image.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-base64image.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-base64image.js",
      "elements/schema-editor/schema-editor-boolean.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-boolean.js",
      "elements/schema-editor/schema-editor-code.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-code.js",
      "elements/schema-editor/schema-editor-color.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-color.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-color.js",
      "elements/schema-editor/schema-editor-date.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-date.js",
      "elements/schema-editor/schema-editor-files.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-files.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-files.js",
      "elements/schema-editor/schema-editor-geojson-point.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-geojson-point.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-geojson-point.js",
      "elements/schema-editor/schema-editor-json.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-json.js",
      "elements/schema-editor/schema-editor-link.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-link.js",
      "elements/schema-editor/schema-editor-number.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-number.js",
      "elements/schema-editor/schema-editor-object.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-object.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-object.js",
      "elements/schema-editor/schema-editor-select.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-select.js",
      "elements/schema-editor/schema-editor-string.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-string.js",
      "elements/schema-editor/schema-editor-table.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-table.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-table.js",
      "elements/schema-editor/schema-editor-textarea.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-textarea.js",
      "elements/schema-editor/schema-editor-url.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-url.js",
      "elements/schema-editor/schema-editor-wrapper.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-wrapper.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor-wrapper.js",
      "elements/schema-editor/schema-editor.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/schema-editor/schema-editor.js",
      "npm:array2d@0.0.5.js",
      "npm:array2d@0.0.5/Array2D.js",
      "npm:mixin-deep@2.0.0.js",
      "npm:mixin-deep@2.0.0/index.js",
      "pages/editor.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/editor.js",
      "resources/checkers/AvailabilityChecker.js",
      "resources/checkers/NotificationChecker.js"
    ],
    "q-bundle-39033c9ff2.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "binding-behaviors/AsyncBindingBehavior.js",
      "binding-behaviors/TimeAgoBindingBehavior.js",
      "binding-behaviors/ToolTBindingBehaviour.js",
      "binding-behaviors/index.js",
      "dialogs/account-dialog.html!github:systemjs/plugin-text@0.0.8.js",
      "dialogs/account-dialog.js",
      "dialogs/confirm-dialog.html!github:systemjs/plugin-text@0.0.8.js",
      "dialogs/help-dialog.html!github:systemjs/plugin-text@0.0.8.js",
      "dialogs/help-dialog.js",
      "dialogs/item-dialog.html!github:systemjs/plugin-text@0.0.8.js",
      "eastereggs.js",
      "elements/atoms/box-icon.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/box-icon.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-primary.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-primary.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-secondary.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-secondary.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-tertiary.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/button-tertiary.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/icon-button.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/icon-button.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/atoms/icon-button.js",
      "elements/atoms/index.js",
      "elements/atoms/q-loader.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/dropdown-menu.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/dropdown-menu.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/dropdown-menu.js",
      "elements/molecules/embed-code.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/embed-code.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/embed-code.js",
      "elements/molecules/index.js",
      "elements/molecules/item-list-entry.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/item-list-entry.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/item-list-entry.js",
      "elements/molecules/language-switcher.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/language-switcher.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/language-switcher.js",
      "elements/molecules/notification.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/notification.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/notification.js",
      "elements/molecules/radio-button-group.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/radio-button-group.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/molecules/radio-button-group.js",
      "elements/organisms/index.js",
      "elements/organisms/items-filter.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/items-filter.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/items-filter.js",
      "elements/organisms/items-list.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/items-list.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/meta-editor.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/meta-editor.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/meta-editor.js",
      "elements/organisms/q-bar.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/q-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/q-bar.js",
      "elements/organisms/tool-selection.css!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/tool-selection.html!github:systemjs/plugin-text@0.0.8.js",
      "elements/organisms/tool-selection.js",
      "github:systemjs/plugin-css@0.1.37.js",
      "github:systemjs/plugin-css@0.1.37/css.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "icons/icon-abort.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-activate.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-active-state.css!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-active-state.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-add.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-back.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-blueprint.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-close.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-collapse.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-crossmark.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-deactivate.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-delete.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-down.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-edit.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-expand-collapse.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-expand.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-help.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-leave.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-logo.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-logo.js",
      "icons/icon-logout.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-m.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-m.js",
      "icons/icon-message-error.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-message-info.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-message-success.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-message-warning.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-more.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-next.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-no.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-notification-high.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-notification-medium.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-proceed.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-save-state.css!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-save-state.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-save.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-up.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/icon-yes.html!github:systemjs/plugin-text@0.0.8.js",
      "icons/index.js",
      "livingdocs-component-app/app.css!github:systemjs/plugin-text@0.0.8.js",
      "livingdocs-component-app/app.html!github:systemjs/plugin-text@0.0.8.js",
      "livingdocs-component-app/app.js",
      "livingdocs-component-main.js",
      "main.js",
      "pages/editor.css!github:systemjs/plugin-text@0.0.8.js",
      "pages/feed.css!github:systemjs/plugin-text@0.0.8.js",
      "pages/feed.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/feed.js",
      "pages/index.css!github:systemjs/plugin-text@0.0.8.js",
      "pages/index.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/index.js",
      "pages/item-overview.css!github:systemjs/plugin-text@0.0.8.js",
      "pages/item-overview.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/item-overview.js",
      "pages/login.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/login.js",
      "pages/server-unavailable.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/server-unavailable.js",
      "pages/tasks.css!github:systemjs/plugin-text@0.0.8.js",
      "pages/tasks.html!github:systemjs/plugin-text@0.0.8.js",
      "pages/tasks.js",
      "resources/availability-checks/ItemHasIdAvailabilityCheck.js",
      "resources/availability-checks/ToolEndpointAvailabilityCheck.js",
      "resources/availability-checks/UserHasRoleAvailabilityCheck.js",
      "resources/availability-checks/index.js",
      "resources/notification-checks/EmptyDataNotificationCheck.js",
      "resources/notification-checks/HasColumnTitlesNotificationCheck.js",
      "resources/notification-checks/TooManyColumnsNotificationCheck.js",
      "resources/notification-checks/ToolEndpointNotificationCheck.js",
      "resources/notification-checks/index.js",
      "styles/app.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/config.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/fonts.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/layout.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/notifications.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/q-dialog.css!github:systemjs/plugin-text@0.0.8.js",
      "styles/q-form.css!github:systemjs/plugin-text@0.0.8.js",
      "value-converters/ForceNumberValueConverter.js",
      "value-converters/JsonValueConverter.js",
      "value-converters/KeysValueConverter.js",
      "value-converters/TimeAgoValueConverter.js",
      "value-converters/ToolTValueConverter.js",
      "value-converters/index.js"
    ]
  },
  depCache: {
    "elements/organisms/tool-status-bar.js": [
      "aurelia-framework",
      "aurelia-templating-resources",
      "aurelia-notification",
      "aurelia-dialog",
      "dialogs/item-dialog.js",
      "resources/QConfig.js"
    ],
    "dialogs/item-dialog.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "elements/item-preview/preview-container.js": [
      "aurelia-framework",
      "resources/qEnv.js",
      "resources/QConfig.js"
    ],
    "elements/item-preview/item-preview.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "aurelia-i18n",
      "resources/qEnv.js",
      "resources/QTargets.js",
      "resources/QConfig.js",
      "resources/User.js"
    ],
    "elements/schema-editor/schema-editor.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-wrapper.js": [
      "aurelia-framework",
      "./helpers",
      "mixin-deep",
      "resources/checkers/NotificationChecker.js",
      "resources/checkers/AvailabilityChecker.js",
      "resources/checkers/ToolEndpointChecker.js"
    ],
    "resources/checkers/NotificationChecker.js": [
      "aurelia-framework",
      "aurelia-i18n",
      "aurelia-dependency-injection",
      "resources/CurrentItemProvider.js"
    ],
    "resources/checkers/AvailabilityChecker.js": [
      "aurelia-framework",
      "aurelia-dependency-injection"
    ],
    "npm:mixin-deep@2.0.0.js": [
      "npm:mixin-deep@2.0.0/index.js"
    ],
    "elements/schema-editor/schema-editor-url.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-textarea.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-table.js": [
      "aurelia-framework",
      "array2d",
      "resources/ObjectFromSchemaGenerator.js",
      "resources/checkers/AvailabilityChecker.js"
    ],
    "npm:array2d@0.0.5.js": [
      "npm:array2d@0.0.5/Array2D.js"
    ],
    "elements/schema-editor/schema-editor-string.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-select.js": [
      "aurelia-framework",
      "resources/schemaEditorDecorators.js"
    ],
    "elements/schema-editor/schema-editor-object.js": [
      "aurelia-framework",
      "./helpers.js"
    ],
    "elements/schema-editor/schema-editor-number.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-link.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-json.js": [
      "aurelia-framework",
      "ajv"
    ],
    "elements/schema-editor/schema-editor-geojson-point.js": [
      "aurelia-framework",
      "resources/QConfig",
      "./helpers.js"
    ],
    "elements/schema-editor/schema-editor-files.js": [
      "aurelia-framework",
      "aurelia-notification",
      "aurelia-i18n",
      "resources/qEnv.js",
      "aurelia-authentication"
    ],
    "elements/schema-editor/schema-editor-date.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-color.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-code.js": [
      "aurelia-framework",
      "resources/QConfig",
      "./helpers.js"
    ],
    "elements/schema-editor/schema-editor-boolean.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-base64image.js": [
      "aurelia-framework"
    ],
    "elements/schema-editor/schema-editor-array.js": [
      "aurelia-framework",
      "resources/checkers/AvailabilityChecker.js",
      "ajv",
      "resources/ObjectFromSchemaGenerator.js"
    ],
    "pages/editor.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "aurelia-dialog",
      "aurelia-i18n",
      "aurelia-notification",
      "dialogs/confirm-dialog.js",
      "resources/qEnv.js",
      "resources/ItemStore.js",
      "resources/checkers/ToolEndpointChecker.js",
      "resources/checkers/AvailabilityChecker.js",
      "resources/checkers/NotificationChecker.js",
      "resources/ToolsInfo.js",
      "resources/CurrentItemProvider.js",
      "resources/ObjectFromSchemaGenerator.js",
      "resources/User.js"
    ],
    "github:systemjs/plugin-css@0.1.37.js": [
      "github:systemjs/plugin-css@0.1.37/css"
    ],
    "github:systemjs/plugin-text@0.0.8.js": [
      "github:systemjs/plugin-text@0.0.8/text"
    ],
    "value-converters/ToolTValueConverter.js": [
      "aurelia-framework",
      "aurelia-i18n",
      "resources/CurrentItemProvider.js"
    ],
    "value-converters/TimeAgoValueConverter.js": [
      "aurelia-framework",
      "aurelia-i18n"
    ],
    "value-converters/KeysValueConverter.js": [
      "aurelia-framework"
    ],
    "value-converters/JsonValueConverter.js": [
      "aurelia-framework"
    ],
    "value-converters/ForceNumberValueConverter.js": [
      "aurelia-framework"
    ],
    "resources/notification-checks/TooManyColumnsNotificationCheck.js": [
      "aurelia-framework",
      "resources/CurrentItemProvider.js"
    ],
    "resources/notification-checks/ToolEndpointNotificationCheck.js": [
      "aurelia-framework",
      "resources/checkers/ToolEndpointChecker.js"
    ],
    "resources/notification-checks/index.js": [
      "./EmptyDataNotificationCheck",
      "./HasColumnTitlesNotificationCheck.js",
      "./TooManyColumnsNotificationCheck.js",
      "./ToolEndpointNotificationCheck.js"
    ],
    "resources/notification-checks/EmptyDataNotificationCheck.js": [
      "aurelia-framework",
      "resources/CurrentItemProvider.js"
    ],
    "resources/notification-checks/HasColumnTitlesNotificationCheck.js": [
      "aurelia-framework",
      "array2d",
      "resources/CurrentItemProvider.js"
    ],
    "resources/availability-checks/UserHasRoleAvailabilityCheck.js": [
      "aurelia-framework",
      "resources/User.js"
    ],
    "resources/availability-checks/ToolEndpointAvailabilityCheck.js": [
      "aurelia-framework",
      "resources/checkers/ToolEndpointChecker.js"
    ],
    "resources/availability-checks/ItemHasIdAvailabilityCheck.js": [
      "aurelia-framework",
      "resources/CurrentItemProvider.js"
    ],
    "resources/availability-checks/index.js": [
      "./ToolEndpointAvailabilityCheck.js",
      "./UserHasRoleAvailabilityCheck.js",
      "./ItemHasIdAvailabilityCheck.js"
    ],
    "pages/tasks.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "resources/qEnv.js",
      "resources/User.js"
    ],
    "pages/login.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-i18n",
      "resources/Auth.js",
      "resources/User.js",
      "resources/qEnv.js"
    ],
    "pages/item-overview.js": [
      "aurelia-framework",
      "aurelia-notification",
      "aurelia-fetch-client",
      "aurelia-router",
      "resources/ItemStore.js",
      "resources/ToolsInfo.js",
      "resources/qEnv.js",
      "resources/ItemActionController",
      "resources/QConfig.js",
      "resources/User.js"
    ],
    "pages/index.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-notification",
      "aurelia-dialog",
      "resources/User.js",
      "resources/ItemStore.js",
      "resources/ToolsInfo.js",
      "resources/Statistics.js",
      "resources/QConfig.js",
      "dialogs/account-dialog"
    ],
    "dialogs/account-dialog.js": [
      "aurelia-framework",
      "aurelia-dependency-injection",
      "aurelia-dialog",
      "aurelia-router",
      "aurelia-i18n",
      "resources/QConfig.js",
      "resources/User.js",
      "resources/Auth.js",
      "resources/ToolsInfo.js"
    ],
    "pages/feed.js": [
      "aurelia-framework",
      "resources/ItemStore.js",
      "resources/ToolsInfo.js",
      "resources/QTargets.js",
      "resources/qEnv.js"
    ],
    "main.js": [
      "aurelia-framework",
      "aurelia-logging-console",
      "aurelia-i18n",
      "resources/QConfig.js",
      "resources/QTargets.js",
      "resources/Auth.js",
      "resources/User.js",
      "resources/EmbedCodeGenerator.js",
      "resources/ItemStore.js",
      "resources/Statistics.js",
      "resources/ToolsInfo.js",
      "resources/checkers/AvailabilityChecker.js",
      "resources/checkers/NotificationChecker.js",
      "resources/checkers/ToolEndpointChecker.js",
      "resources/ItemActionController.js",
      "resources/IdGenerator.js",
      "resources/CurrentItemProvider.js",
      "resources/ObjectFromSchemaGenerator.js",
      "resources/qEnv.js",
      "eastereggs.js"
    ],
    "livingdocs-component-main.js": [
      "resources/QConfig.js",
      "i18next-fetch-backend",
      "resources/ToolsInfo.js",
      "resources/qEnv.js",
      "resources/CurrentItemProvider.js"
    ],
    "livingdocs-component-app/app.js": [
      "aurelia-framework",
      "aurelia-i18n",
      "resources/ItemStore.js",
      "resources/QTargets.js",
      "resources/qEnv.js",
      "resources/ObjectFromSchemaGenerator.js",
      "resources/CurrentItemProvider.js",
      "resources/QConfig.js"
    ],
    "icons/icon-m.js": [
      "aurelia-framework",
      "resources/QConfig.js"
    ],
    "icons/icon-logo.js": [
      "aurelia-framework"
    ],
    "elements/organisms/tool-selection.js": [
      "aurelia-framework",
      "resources/ToolsInfo",
      "resources/User.js"
    ],
    "elements/organisms/q-bar.js": [
      "aurelia-framework",
      "aurelia-dialog",
      "aurelia-router",
      "dialogs/help-dialog",
      "resources/User.js",
      "resources/Auth.js"
    ],
    "dialogs/help-dialog.js": [
      "aurelia-framework",
      "aurelia-dialog",
      "resources/QConfig.js"
    ],
    "elements/organisms/meta-editor.js": [
      "aurelia-framework",
      "resources/QConfig"
    ],
    "elements/organisms/items-filter.js": [
      "aurelia-framework"
    ],
    "elements/molecules/radio-button-group.js": [
      "aurelia-framework"
    ],
    "elements/molecules/notification.js": [
      "aurelia-framework"
    ],
    "elements/molecules/language-switcher.js": [
      "aurelia-framework",
      "aurelia-i18n",
      "resources/QConfig.js"
    ],
    "elements/molecules/item-list-entry.js": [
      "aurelia-framework",
      "resources/ToolsInfo",
      "resources/User",
      "resources/ItemActionController"
    ],
    "elements/molecules/embed-code.js": [
      "aurelia-framework",
      "resources/QConfig.js",
      "resources/EmbedCodeGenerator.js"
    ],
    "elements/atoms/icon-button.js": [
      "aurelia-framework"
    ],
    "binding-behaviors/ToolTBindingBehaviour.js": [
      "aurelia-framework",
      "aurelia-templating-resources",
      "aurelia-binding"
    ],
    "binding-behaviors/TimeAgoBindingBehavior.js": [
      "aurelia-framework",
      "aurelia-binding",
      "aurelia-templating-resources"
    ],
    "binding-behaviors/AsyncBindingBehavior.js": [
      "aurelia-binding"
    ],
    "app.js": [
      "aurelia-framework",
      "aurelia-router",
      "resources/User.js",
      "resources/QConfig.js",
      "resources/qEnv.js"
    ]
  }
});