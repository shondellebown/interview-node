const Express = require('express');
const Path = require('path');

const app = Express();

//Add a get call to '/' that returns "Path.resolve(__dirname, 'index.html')"

//Add a get call to '/style.css' that returns "Path.resolve(__dirname, 'style.css')"

//Add a get call to '/api' that returns the content of the api.js output

app.listen(
    8080,
    () => {
        console.log('Server listening on port :8080');
    },
);
