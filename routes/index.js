const fs = require("fs");
const basePath = require('./basePath.js')

module.exports = (config) => {
  const env = {
    headMarkup: process.env.HEAD_MARKUP || "",
    bodyStartMarkup: process.env.BODY_START_MARKUP || "",
    bodyEndMarkup: process.env.BODY_END_MARKUP || ""
  };

  const indexFile = fs.readFileSync(`${basePath}/index.html`, {
    encoding: "utf-8"
  });

  const compiledIndexFileContent = indexFile
    .replace(/^\s*<base([^>]*)>/, `<base href="${config.basePath || '/'}">\n`)
    .replace("<!-- HEAD_MARKUP -->", env.headMarkup)
    .replace("<!-- BODY_START_MARKUP -->", env.bodyStartMarkup)
    .replace("<!-- BODY_END_MARKUP -->", env.bodyEndMarkup);

  function handler(request, h) {
    return h
      .response(compiledIndexFileContent)
      .type("text/html");
  }

  return [
    require("./env"),
    require("./locales"),
    require("./favicon"),
    ...require("./jspm_packages"),
    {
      method: "GET",
      path: "/",
      handler: handler
    },
    {
      method: "GET",
      path: "/index.html",
      handler: handler
    },
    {
      method: "GET",
      path: "/editor/{path*}",
      handler: handler
    },
    {
      method: "GET",
      path: "/item/{path*}",
      handler: handler
    },
    {
      method: "GET",
      path: "/login/{path*}",
      handler: handler
    },
    {
      method: "GET",
      path: "/feed",
      handler: handler
    },
    {
      method: "GET",
      path: "/tasks",
      handler: handler
    },
    {
      method: "GET",
      path: "/tasks/{path*}",
      handler: handler
    },
    {
      method: "GET",
      path: "/index/{path*}",
      handler: handler
    },
    require("./default")
  ];
}
