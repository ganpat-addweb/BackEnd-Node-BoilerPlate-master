import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

async function init({ expressApp }) {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Initialized');
  
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
  
  // More loaders can be here
  
  return { mongoConnection };
}

export { init };
