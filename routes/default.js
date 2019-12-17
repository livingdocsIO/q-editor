const basePath = require('./basePath.js')
module.exports = {
  method: "GET",
  path: "/{path*}",
  config: {
    cache: {
      expiresIn: 365 * 24 * 60 * 60 * 1000,
      privacy: "public"
    }
  },
  handler: {
    directory: {
      path: basePath,
      redirectToSlash: true
    }
  }
};
