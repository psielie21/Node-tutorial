var bl = require('bl');
var http = require('http');

var adress = process.argv[2];

http.get(adress, function(res){
    res.pipe(bl(function (err,data){
        if(err){
           throw new err;
         }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
    
});