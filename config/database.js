// Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
const crypto = require('crypto').randomBytes(256).toString('hex');

// Export config object
module.exports = {
   // uri: 'mongodb://marcio:marcio@ds155684.mlab.com:55684/mean-auth-db',
   uri: 'mongodb://localhost:27017/mean-auth-db',
   secret: crypto,
   db: 'mean-auth-db'
}