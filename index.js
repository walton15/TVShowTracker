const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.send('This is the home page.');
});

app.get('/carousel', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10);
    res.render('rand', {rand});
});

app.get('/r/:subreddit/:extension', (req, res) => {
    const {subreddit, extension} = req.params; 
    res.render('home', {subreddit, extension});
});

app.get('/cats', (req, res) => {
    const cats = ['Blue','Rocket','Chloe','Pumpkin','Autumn'];
    res.render('cats', {cats});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("LISTENING HERE");
});