var crypto = require('crypto');
var colors = require('colors');

module.exports.encrypt = function encrypt(algorithm, password, text) {
    if (!algorithm || !password || !text) {
        return console.log('ERROR: You must include an algorithm, password, and text.'.red);
    }
    if (crypto.getCiphers().indexOf(algorithm) === -1) {
        return console.log(('ERROR: ' + algorithm + ' is not a valid algorithm.').red);
    }
    var cipher = crypto.createCipher(algorithm,password);
    try {
        var crypted = cipher.update(text,'utf8','hex');
        crypted += cipher.final('hex');
        return crypted;
    } catch(e) {
        console.log('ERROR: COULD NOT ENCRYPT.'.red, e);
    }

};
 
module.exports.decrypt = function decrypt(algorithm, password, text) {
    if (!algorithm || !password || !text) {
        return console.log('ERROR: You must include an algorithm, password, and text.'.red);
    }
    if (crypto.getCiphers().indexOf(algorithm) === -1) {
        return console.log(('ERROR: ' + algorithm + ' is not a valid algorithm.').red);
    }
    var decipher = crypto.createDecipher(algorithm,password);
    try {
        var dec = decipher.update(text,'hex','utf8');
        dec += decipher.final('utf8');
        return dec;
    } catch(e) {
        console.log('ERROR: COULD NOT DECRYPT. Check your password'.red, e);
    }
};
 
