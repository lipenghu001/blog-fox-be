const qiniu = require('qiniu')

// generate mac
const accessKey = '7pzYYZoJ3upEP7-3Zik7obTqXb3y9XCbUG-p38Jz';
const secretKey = '583Zx8rSSpxjTq-pWPq_cR8ZlyW76qIvnnIvckGo';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

// genetate uploadToken
var options = {
  scope: 'firstlove-fox',
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);


// init config class
// var config = new qiniu.conf.Config();
// // 空间对应的机房
// config.zone = qiniu.zone.Zone_z1;