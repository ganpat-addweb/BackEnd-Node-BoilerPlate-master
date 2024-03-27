import express from 'express';
import config from './src/config/index.js';
import {init} from './src/loaders/index.js';

async function startServer() {
  const app = express(); 

  await init({ expressApp: app });
 
  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server listening on port http://localhost:${config.port}`);
  });
}

startServer();
