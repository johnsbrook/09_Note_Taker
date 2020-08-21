// Linked db.json to routing
var notesData = require("../db/db.json");

// Established API routing
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.josn(true);
    });

    app.post("/api/notes", function(req, res) {
        notesData.length = 0;
        res.json({ok: true});
    });

};