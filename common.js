//ローカルIPアドレス取得
exports.getIP = function(){
  var os = require('os'),
      ip,
      interfaces = os.networkInterfaces();

  var getIPv4 = function(){
    interfaces[dev].forEach(function(details){
      if (details.family === 'IPv4' && details.address.indexOf('192.') > -1){
        ip = details.address;
      }
    });
  };

  for (var dev in interfaces) {
    getIPv4(dev);
  }
  return ip;
};
