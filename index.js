const fs = require('fs')

const Hapi = require("@hapi/hapi");
const routes = require("./routes/routes.js");

const plugins = [require("@hapi/inert")];
const serverConfig = require('./config')
let server;

const patchBaseUrlInIndexHtml = () => {
  const filePath = require.resolve('./client/export/index.html')
  const currentContent = fs.readFileSync(filePath, 'utf8')
  const newContent = currentContent.replace(/<base.*\n/, `<base href="${serverConfig.basePath || '/'}">\n`)
  fs.writeFileSync(filePath, newContent, 'utf8')
}


async function start() {
  patchBaseUrlInIndexHtml()
  const hapiOptions = {
    port: serverConfig.port,
    load: { sampleInterval: 1000 },
    routes: {
      state: { parse: false, failAction: "log" }
    }
  };

  server = Hapi.server(hapiOptions);

  await server.register(plugins);

  server.route(routes);

  if (process.env.FEATURE_BROTLI) {
    await server.register({
      plugin: require("brok"),
      options: {
        compress: {
          quality: 5
        }
      }
    });
  }

  await server.start();
}

start()
  .then(() => {
    console.log("hapi server running " + server.info.uri);
  })
  .catch(err => {
    console.error(err, err.stack);
    process.exit(1);
  });

async function gracefullyStop() {
  console.log("stopping hapi server");
  try {
    await server.stop({ timeout: 10000 });
    console.log("hapi server stopped");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
}

// listen on SIGINT and SIGTERM signal and gracefully stop the server
process.on("SIGINT", gracefullyStop);
process.on("SIGTERM", gracefullyStop);
