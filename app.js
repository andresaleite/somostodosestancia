
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/somostodosestancia'));

app.get('/*', function(req, res){
     res.sendFile(__dirname +  '/dist/somostodosestancia/index.html');
});

//app.listen(process.env.PORT || 4200);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});