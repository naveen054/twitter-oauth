var express = require('express');
var app = express();
var path = require('path');
var config = require('_config');
var twt = new require('node-twitter-api')(config.twitter);

app.use(express.static(__dirname+'/web/views'));
app.use(express.static(__dirname+'/web/js'));
app.use(express.static(__dirname+'/web/css'));
app.get('/',function(req,res){
  res.render('index');
});
app.get('/auth',function(req,res){
  twt.getRequestToken(function(err,oAuthtoken,oauthTokenSecret,results){
    if(err){
      console.log(err);
    }else {
      console.log(oAuthtoken);
    }
  })
})
app.listen(config.port);
