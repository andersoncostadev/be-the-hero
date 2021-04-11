const crypto = require('crypto');

module.exports = function generatinUniqueId() {
    return crypto.randomBytes(4).toString('HEX');

}