// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  next();
});
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('commentsOnlyJS'));
const port = 5000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug
function listening(){
    console.log(`Server running on localhost: ${port}`);
};
// Initialize all route with a callback function
app.get('/', getInfo);
// Callback function to complete GET '/all'
function getInfo(req, res){
    res.send('Hello');
    console.log(req);
};
// Post Route
app.post('/', callBack);

function callBack(req,res){
    res.send('POST received');
  }