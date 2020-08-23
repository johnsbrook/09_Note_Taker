// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
var notesData = require("../db/db.json"); //C:\Users\falen\Desktop\homework\09_Note_Taker\db\db.json
var fs = require("fs");
var path = require('path');

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
 
     res.json(notesData);
  });


  app.post("/api/notes", function (req, res) {
    
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);

      notes.push(req.body);
      const jsonString = JSON.stringify(notes);
      fs.writeFile("./db/db.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
          
        }
      });
    })
    res.redirect('/api/notes');
  });

  app.get("/api/notes/:id", function(req, res) {
    var note = req.params.id;
  
    console.log(note);
  
    for (var i = 0; i < notesData.length; i++) {
      if (note === notesData[i].id) {
        return res.json(notesData[i]);
      }
    }
  
    return res.json(false);
  });

  
  app.delete('/api/notes/:id', function (req, res) {

    const { id } = req.params;

    var newNotesData = notesData.filter(note => note.id !== id);

    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotesData), function(err){
        if (err) { console.log("Error"); } else { console.log("Note deleted"); }
    });
  });



};
