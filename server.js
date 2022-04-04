const API = require('./api');
const express = require('express');
const Path = require('path');

const app = express();
app.use(express.json());

app.get(
  '/',
  (req, res) => res.sendFile(Path.resolve(__dirname, 'index.html')),
);

app.get(
  '/style.css',
  (req, res) => {
    res.status = 200;
    res.contentType = 'text/css';
    res.sendFile(Path.resolve(__dirname, 'style.css'))
  },
);

//Add a get call to return the content of the API getUsers method

app.listen(
    8080,
    () => {
        console.log('Server listening on port :8080');
    },
);
