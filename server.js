const express = require('express');
const config = require('./src/config/index');
const loaders = require('./src/loaders');

async function startServer() {
  const app = express();

  await loaders.init({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server listening on port ${config.port}`);
  });
}

startServer();
