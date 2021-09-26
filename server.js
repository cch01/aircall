const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 8080);

app.get('*', (req, res) => res.sendfile(path.join(__dirname, 'dist/index.html')));

const server = app.listen(app.get('port'), () => {
  console.log('listening on port ', server.address().port);
});
