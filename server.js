// Establish Dependencies
var express = require("express");
var path = require("path");

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Added port listener
app.listen(PORT, function () {
    console.log("listening on: http://localhost:" + PORT);
})