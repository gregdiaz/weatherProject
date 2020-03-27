// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
debugger;
app.use(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    console.log(req);
});
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 5000;
// Setup Server
const server = app.listen(port, ()=>{console.log(`Server Running on localhost: ${port}`)});


