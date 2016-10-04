var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){

  res.sendFile(path.join(__dirname,'index.html'),function(){
    res.end();
  });


});
app.listen(1234);
