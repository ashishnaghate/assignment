var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

//Index page 
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 3010;
app.listen(port, function() {
    console.log('UI listening on port ' + port);
});