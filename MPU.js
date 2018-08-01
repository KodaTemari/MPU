var TCP_PORT = 3000,
    DIRECTORY = 'MPU',
    SERIAL_PORT = 'COM9',// センサーを接続しているシリアルポート
    BAUD_RATE = 9600,// 通信回線の速度
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    serialPort = require('SerialPort');

var serial = new serialPort(SERIAL_PORT,{
  parser: serialPort.parsers.readline('\n'),
  baudrate: BAUD_RATE
});

var COMMON = require('./common.js');

var init = function () {
  app.use(express.static(DIRECTORY));
  http.listen(TCP_PORT, function(){
    console.log(COMMON.getIP() + ':' + TCP_PORT + ' でサーバーを起動');
  });
  setIo();
},

//ソケットIO設定
setIo = function(){

  serial.on('data',function(data){
    console.log(data);
    io.emit('acc',data.toString());
  });

  io.on('connection',function(socket){
    socket.on('pos',function(data){
      serial.write(new Buffer(data),function(err,results){
      console.log(data);
        if(err) {
          console.log('Err: ' + err);
          console.log('Results: ' + results);
        }
      });
    });
  });
};

init();
