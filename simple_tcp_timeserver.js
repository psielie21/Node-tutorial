var net = require("net");

var port = process.argv[2];

var server = net.createServer(function(socket){
    var date = new Date();
    var month = date.getMonth()+1;
    if(month.toString().length == 1){
        month = "0"+month;
    }
    var response = date.getFullYear()+ "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
    socket.end(response);
});
server.listen(port);