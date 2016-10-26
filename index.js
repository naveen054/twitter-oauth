var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');
<<<<<<< HEAD
var cookieSession = require('cookie-session');
=======
>>>>>>> cfec27ad11ce1845d95ef436a331a91efb20d4c6
var twt = new require('node-twitter-api')(config.twitter);

app.use(express.static(__dirname+'/web/views'));
app.use(express.static(__dirname+'/web/js'));
app.use(express.static(__dirname+'/web/css'));
app.use(cookieSession({
  'name':'_tuser',
  'secret':'secret'
}))
app.set('views','./web/views')
app.set('view engine','jade');
// app.use(function(req,res,next) {
//   res.set('Access-Control-Allow-Origin','*');
//   res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//  res.set('Access-Control-Allow-Headers', 'Content-Type');
//  next();
// })
app.get('/',function(req,res){








  res.render('index');

});

app.get('/auth',function(req,res){
  console.log(config.twitter);
  twt.getRequestToken(function(err,oAuthtoken,oauthTokenSecret,results){
    if(err){
      console.log(err);
    }else {
      res.set('Access-Control-Allow-Origin','*');
      res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
     res.set('Access-Control-Allow-Headers', 'Content-Type');
      console.log(`oAuthtoken: ${oAuthtoken}  oauthTokenSecret: ${oauthTokenSecret} results: ${results}`);
      res.redirect(302,'https://api.twitter.com/oauth/authenticate?oauth_token='+oAuthtoken);
    }
  })


});
app.get('/user',function(req,res){
  console.log('got a req from twitter');
  // // console.log(req);
  // console.log(req.session.isChanged);
  console.log(req.query.oauth_token);
  console.log(req.query.oauth_verifier);
  // console.log(req.params.);
  res.render('users');
})
app.listen(config.port,function(){
  console.log("Express started");
});
