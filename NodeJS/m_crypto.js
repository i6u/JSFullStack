'use strict'

var crypto = require('crypto');

var hash = crypto.createHash('md5');

// hash.update('zwt');

console.log(hash.digest('hex'));