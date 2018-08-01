// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<a href='index.html'><h1>Sorry the platform did not explain how to render an html file from the root route. I suggest you click the link to get to the index within the static folder</h1></a>");
})
app.use(express.static(__dirname + "/static"));// this is the line that tells our server to use the "/static" folder for static content
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views');// This sets the location where express will look for the ejs viewscopy 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.listen(8000, function() {
  console.log("listening on port 8000");// tell the express app to listen on port 8000, always put this at the end of your server.js file
})