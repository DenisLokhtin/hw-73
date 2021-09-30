const express = require('express');

const app = express();
const port = 8008;

app.get('/:message', ((req, res) => {
    res.set({'Content-type': 'text/plain'}).send(req.params.message);
}));

app.listen(port, () => {
    console.log('he is alive on ' + 'http://127.0.0.1:' + port);
});
