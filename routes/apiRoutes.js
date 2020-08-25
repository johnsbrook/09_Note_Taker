var notesData = require("../db/db.json"); 
var fs = require("fs");
var path = require('path');
var uuid = require("uuidv1");    

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
 
     res.json(notesData);
  });


  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    const {title,text} = newNote;
    let newNoteData = {title, text, id:uuid()};

    notesData.push(newNoteData);
    res.json(notesData);
    console.log("New note is being created.")

      fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log("Note written");        
      })

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

  
  app.delete("/api/notes/:id", function (req, res) {
    const id = req.params.id;
    var newNotesData = notesData.filter((note) => note.id !== id);

    fs.writeFile("./db/db.json", JSON.stringify(newNotesData), function (err) {
        if (err) throw err;
        console.log("Note deleted");
        });
        
    notesData = newNotesData;
    res.json(newNotesData);
    console.log("The note has been removed.")

  });


 



};
