import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName":"Steve", "lastName": "Perry", "email": "steve@gmail.com"},
    {"id": 3, "firstName":"Billy", "lastName": "King", "email": "billy@gmail.com"}
  ]);
});

/* eslint-disable no-console */

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
