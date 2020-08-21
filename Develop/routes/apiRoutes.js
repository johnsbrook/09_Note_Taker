// Linked db.json to routing
var notesData = require("../db/db.json");

// Established routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
      });
}