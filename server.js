var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/apiRoutes');
require('./routes/htmlRoutes');

app.listen(PORT, function() {
    console.log("Esta aplicacion esta usando el puerto " + PORT + " y esta disponible en http://localhost:" + PORT);
})