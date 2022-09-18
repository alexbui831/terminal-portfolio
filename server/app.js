const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; 

// http method
// basically when we want to visit from a web browser
app.use(express.static('client'));




// defines webserver port with callback function
// when we visit on terminal
app.listen(port, () => {
    console.log('Server connected at:', port);
});