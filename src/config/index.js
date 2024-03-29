import dotenv from 'dotenv'
dotenv.config()

const config = {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URL,
  jwtDecryptKey: process.env.JWT_DECRYPT_KEY
}

export default config
