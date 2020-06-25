  
let express = require('express');
let path = require('path');
let serverStatic = require('serve-static');

app = express();
app.use(serverStatic(__dirname + '/dist'));

let port = process.env.PORT || 5000;
app.listen(port);

console.log('server started on port: ' + port);