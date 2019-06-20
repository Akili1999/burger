var express = require('express'); // We require the npm extension express

var PORT = process.env.PORT || 8080; // This handles our porting of the app, for localhost we are gonna put it on 8080

var exphbs = require('express-handlebars'); // we require the npm extension express handlebars

var app = express(); // we put the functions of express into a variable called app

var router = require('./controllers/burgers_controller.js'); // this is the router we made within the burger controller file

var bodyParser = require('body-parser'); // this is a body parser that helps with front end commands

var methodOverride = require('method-override'); // this is a method override for controlling classes

app.use(express.static('public')); // This is a static public route so that we can use our public file with handlebars

app.use(express.static(process.cwd() + '/public')); // This is processes for public

app.use(bodyParser.urlencoded({ extended: true })); // This is the use of our body parser for the url

app.use(methodOverride('_method')); // We declare the method override as _method

app.engine('handlebars', exphbs({defaultLayout: 'main'})); // We are using the main handlebars layout we made within the views folder

app.set('view engine', 'handlebars'); // We are using the engine of handlebars

app.use('/', router); // This is the use of our router for the server

app.listen(PORT, function() { // This is letting the app listen for commands on our server, on the port we have chosen above
    console.log("Server listening on: http://localhost:" + PORT);
});
  