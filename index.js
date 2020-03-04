const crypto = require('crypto');

export class Des{
  constructor(params) {
    if (!params.key) throw 'key is required'
    this.key = new Buffer.from(params.key);
    this.iv = new Buffer.from(params.iv ? params.iv : 0)
    this.alg = params.alg || 'aes-128-cbc'
    this.autoPad = params.autoPad || true
  }

  encrypt(data) {
    if (!data) throw 'data is required'
    var cipher = crypto.createCipheriv(this.alg, this.key, this.iv);
    cipher.setAutoPadding(this.autoPad)	//default true
    var ciph = cipher.update(data, 'utf8', 'binary');
    return ciph += cipher.final('binary'), ciph = new Buffer.from(ciph, 'binary').toString('base64'), ciph
  }

  decrypt(data) {
    if (!data) throw 'data is required'
    data = new Buffer.from(data, 'base64').toString('binary')
    var decipher = crypto.createDecipheriv(this.alg, this.key, this.iv);
    decipher.setAutoPadding(this.autoPad)	//default true
    var result = decipher.update(data, 'binary', 'utf8');
    return result += decipher.final('utf8'), result
  }
}

// module.exports = Des

