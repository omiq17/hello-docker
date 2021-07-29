'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Docker');
});

app.get('/redirect', (req, res) => {
  request.get('http://testapp:' + PORT + '/reset', function (error, response, body) {
    if (error) {
      console.log({ error: error });
      res.send("Something went wrong")
    }
    else {
      res.send({ "Redirect result": body })
    }
  });
});

app.get('/reset', (req, res) => {
  res.send('Reset Docker!');
});

app.listen(PORT, HOST);
console.log(`Node app is running on http://${HOST}:${PORT}`);
