const express = require('express');
const history = require('connect-history-api-fallback');
const serverStatic = require('serve-static');
const staticFileMiddleware = express.static(__dirname)

const app = express();

app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware);

let port = process.env.PORT || 5000;
app.listen(port);

console.log('server started on port: ' + port);


