var fs = require("fs");
var path = require("path");
module.exports = function(dirname, ext, callback){
    
    fs.readdir(dirname, function(err, data){
        
        if(err){
            return callback(err);
        }
        
        var lis = data.filter(function(word){
        return (word.indexOf("."+ext) > -1);
     });

     callback(null, lis);
    });
};


