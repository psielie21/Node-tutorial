var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(req, res){
    var adress = url.parse(req.url, true);
    var date = new Date(adress.query["iso"]);
    if(adress.pathname === "/api/parsetime"){
        var jsonreturn = {"hour": date.getHours() , "minute": date.getMinutes(), "second": date.getSeconds()};
        res.writeHead(200, {"Content-Type": "aplication/json"});
        res.end(JSON.stringify(jsonreturn));
        
    }else if(adress.pathname === "/api/unixtime"){
        var jsonreturn = {"unixtime": date.getTime()};
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(jsonreturn));
    }
});

server.listen(port);