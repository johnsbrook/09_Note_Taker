var baseDatos = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function (sol, res){
        res.baseDatos;
    })
}
