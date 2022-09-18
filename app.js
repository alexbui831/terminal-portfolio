const express = require('express');
const app = express();

// http method
// basically when we want to visit from a web browser: we get 'Welcome Home'
app.get('/', (request, response) => {
    response.send('Welcome home');
});

// defines webserver port with callback function
// when we visit on terminal
app.listen(3000, () => {
    console.log('Whats up');
});