import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
export const sqlConfig = {

 user: 'sa',
 password: 'ajoshi94',
 database: 'Stackoverflow',
 server: 'localhost',
 trustServerCertificate: true,
 pool: {
  max: 10,
  min: 0,
  idleTimeoutMillis: 30000
 },
 options: {
  encrypt: true // for azure
  // change to true for local dev / self-signed certs
 }
}