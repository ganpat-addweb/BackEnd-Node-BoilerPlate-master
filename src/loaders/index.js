const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

async function init({ expressApp }) {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Initialized');
  
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
  
  // More loaders can be here
  
  return { mongoConnection };
}

module.exports = { init };
