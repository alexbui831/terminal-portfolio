const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; 

// http method
// basically when we want to visit from a web browser: we get 'Welcome Home'
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'));
});
// defines webserver port with callback function
// when we visit on terminal
app.listen(port, () => {
    console.log('Whats up');
});