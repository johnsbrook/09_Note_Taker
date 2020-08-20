// Establish Dependencies
var express = require("express");

// Create express server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({extend: true}));
app.use(express.json());

