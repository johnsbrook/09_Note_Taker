// Establish Dependencies
var express = require("express");
var fs = require("fs");

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

// API routes should be created
// GET /api/notes - Should read the db.json file and return all saved notes as JSON
app.get('/api/notes', function(req, res){
    return res.json(notes);
});

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.