// Establish Dependencies
var express = require("express");

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({extend: true}));
app.use(express.json());

// GET /notes - Should return the notes.html file.
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// GET * - Should return the index.html file
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})