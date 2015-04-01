var net = require("net");

function padNum (num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num.toString();
  }
};

var server = net.createServer(function (socket) {
  var date = new Date();
  var data = date.getFullYear().toString();
  data += "-" + padNum(date.getMonth() + 1);
  data += "-" + padNum(date.getDate());
  data += " " + date.getHours();
  data += ":" + date.getMinutes();
  data += "\n";

  socket.end(data);
});
server.listen(process.argv[2]);
