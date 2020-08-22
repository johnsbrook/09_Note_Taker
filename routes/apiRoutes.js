// Linked db.json to routing
var notesData = require("../db/db.json");

// Established API routing
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        return res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        return res.json();
    });

};

