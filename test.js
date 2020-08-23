var notesData = require("./db/db.json");
console.log(notesData);


var noteID = 721

for (var i = 0; i < notesData.length; i++) {
    var obj = notesData[i];

    if (listToDelete.indexOf(obj.id) !== -1) {
        notesData.splice(i, 1);
    }
}

console.log(notesData)