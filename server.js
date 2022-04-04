const Express = require('express');
const Path = require('path');

const app = Express();

app.get(
  '/',
  (req, res) => res.sendFile(Path.resolve(__dirname, 'index.html')),
);

app.get(
  '/style.css',
  (req, res) => res.sendFile(Path.resolve(__dirname, 'style.css')),
);

//Add a get call to the API file

app.listen(
    8080,
    () => {
        console.log('Server listening on port :8080');
    },
);
