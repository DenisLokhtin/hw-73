const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const password = "JdnfkKLdl";

const app = express();
const port = 8009;

const cipher = (password, message) => {
    Vigenere.Cipher(password).crypt(message);
};

const decipher = (password, message) => {
    Vigenere.Decipher(password).crypt(message);
};

app.get('/encode/:message', (req, res) => {
    res.set({'Content-type': 'text/plain'}).send(cipher(password, req.params.message));
});

app.get('/decode/:message', (req, res) => {
    res.set({'Content-type': 'text/plain'}).send(decipher(password, req.params.message));
});


app.listen(port, () => {
    console.log('he is alive on ' + 'http://127.0.0.1:' + port);
});
