const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();

// PRIVATE and PUBLIC key
var privateKEY = fs.readFileSync('./private.key', 'utf8');
var publicKEY = fs.readFileSync('./public.key', 'utf8');

var i = 'Drive4Change'; // Issuer 
var s = 'Verification'; // Subject 
var a = 'http://l'; // Audience

app.get('/', (req, res) => {
    res.send("Index Page");
});

app.get('/jwt', (req, res) => {
    // PAYLOAD
    var payload = {
        user: "user123"
    };
    // SIGNING OPTIONS
    var signOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: "12h",
        algorithm: "RS256"
    };
    res.json({
        token: jwt.sign(payload, privateKEY, signOptions)
    });
})

app.get('/verify', (req, res) => {
    let token = req.headers.authorization.split(' ')[1];
    let verifyOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: "12h",
        algorithm: ["RS256"]
    };
    let legit = jwt.verify(token, publicKEY, verifyOptions);
    res.json(JSON.stringify(legit));
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});