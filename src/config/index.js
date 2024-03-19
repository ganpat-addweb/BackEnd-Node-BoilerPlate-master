require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URL,
  jwtDecryptKey: process.env.JWT_DECRYPT_KEY
};
