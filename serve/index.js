var sig = require('tls-sig-api');
var userId = 'zhaoyang';
var config = {
    "sdk_appid": 1400167504,
    "expire_after": 180 * 24 * 3600,
    "private_key": "private_key",
    "public_key": "public_key"
}
 
var sig = new sig.Sig(config);
var userSig = sig.genSig(userId);
console.log(userSig);