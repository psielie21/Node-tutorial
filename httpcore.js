var http = require("http");
var adress = process.argv[2];

var str = http.get(adress, function(response){
    response.setEncoding("utf8").on("data", function(data){
       console.log(data);
    }) 
});

