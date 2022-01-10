const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // mamking EJS our view engine

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
})

// we can query into a database using a route parameter
app.get('/profile/:name', (req, res) => {
    const data = { age: 29, job: 'ninja' }
    res.render('profile', { person: req.params.name, data: data });
})



app.listen(3000);