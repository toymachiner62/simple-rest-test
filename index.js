const randtoken = require('rand-token');
const bodyParser = require('body-parser');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.json()); // for parsing application/json

app.post('/auth', function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;

  if(username == null) {
    return res.status(400).send('username can\'t be null ');
  }

  if(password == null) {
    return res.status(400).send('password can\'t be null ');
  }

  return res.json({token: randtoken.generate(16)});
});

console.log('server started on: ' + port);
