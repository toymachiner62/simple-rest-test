const randtoken = require('rand-token');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.route('/auth')
    .post(function(req, res) {
      res.send(randtoken.generate(16));
    });

console.log('server started on: ' + port);
