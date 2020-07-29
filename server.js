let express = require('express');
let history = require('connect-history-api-fallback');
let path = require('path');
let serveStatic = require('serve-static');
let staticFileMiddleware = express.static(__dirname + "/dist")

app = express();

app.use(staticFileMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true
}))
app.use(staticFileMiddleware)

var port = process.env.PORT || 5005;
var hostname = 'localhost';

app.listen(port, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });