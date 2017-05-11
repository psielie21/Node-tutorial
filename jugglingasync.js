var http = require('http');
var hyperquest = require('hyperquest');
var bl = require('bl');

var adresses = process.argv.slice(2,5);


var todolist = [false, false, false];

function getData(adress, callback){
    hyperquest(adress).pipe(bl(function (err, data) {
    if(err){
        throw new err;
    }
     return callback(data.toString());
    }));
}

function exe(callback){
    
    getData(adresses[0], function(data){
      todolist[0] = data;
      callback();
    });
    getData(adresses[1], function(data){
      todolist[1] = data;
      callback();
    });
    getData(adresses[2], function(data){
       todolist[2] = data;
       callback();
    });
}

exe(function(){
    if(todolist.indexOf(false) == -1){
        todolist.map(function(data){
            console.log(data);
        });
    }
});