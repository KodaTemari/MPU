var MPU = MPU || {};

MPU.VIEW = function(){
  "use strict";
  var socket = io(),
      acc_x,
      acc_y,
      acc_z,
      angle_x,
      angle_y,
      angle_z,
      gyro_x,
      gyro_y,
      gyro_z,
      $body = $("body"),
      $checkBox = $('input[type="checkbox"]'),
      $acc_x = $("#acc_x"),
      $acc_y = $("#acc_y"),
      $acc_z = $("#acc_z"),
      $angle_x = $("#angle_x"),
      $angle_y = $("#angle_y"),
      $angle_z = $("#angle_z"),
      $gyro_x = $("#gyro_x"),
      $gyro_y = $("#gyro_y"),
      $gyro_z = $("#gyro_z"),
      $target_acc = $("#target_acc"),
      $target_angle = $("#target_angle"),
      $target_gyro = $("#target_gyro");

  var init = function(){
    setSocket();
    bindEvent();
  },

  setSocket = function(){
    socket.on("acc", function(data){
      data = data.split("\t");
      acc_x = Math.round(data[0] * 100);
      acc_y = Math.round(data[1] * 100);
      acc_z = Math.round(data[2] * 100);
      angle_x = Math.round(data[3]);
      angle_y = Math.round(data[4]);
      angle_z = Math.round(data[5]);
      gyro_x = Math.round(data[6]);
      gyro_y = Math.round(data[7]);
      gyro_z = Math.round(data[8]);
      $acc_x.text(acc_x);
      $acc_y.text(acc_y);
      $angle_x.text(angle_x);
      $angle_y.text(angle_y);
      $angle_z.text(angle_z);
      $acc_z.text(acc_z);
      $gyro_x.text(gyro_x);
      $gyro_y.text(gyro_y);
      $gyro_z.text(gyro_z);

      $target_acc.css({"transform":"translate3d("+acc_x+"px,"+acc_y+"px,"+acc_z+"px) scale("+(acc_z/300+1)+")","opacity":acc_z/300 + 0.5});
      $target_angle.css({"transform":"rotateX("+angle_x+"deg) rotateY("+angle_y+"deg) rotateZ("+angle_z+"deg)"});
      $target_gyro.css({"transform":"rotateX("+gyro_x+"deg) rotateY("+gyro_y+"deg) rotateZ("+gyro_z+"deg)"});
    });
  },

  bindEvent = function(){
    //ラジオクリック
    $checkBox.on("click", function(){
      var that = $(this),
          className = that.attr("name");
      if(that.prop('checked')) {
        $body.addClass(className);
      }
      else {
        $body.removeClass(className);
      }
    });
  };

  return {
    init : init
  };
};
