const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, './public/login.html'));
  });
app.get('/registrazione', function(req, res) {
    res.sendFile(path.join(__dirname, './public/registrazione.html'));
  });

  app.get('/alloggio', function(req, res) {
    res.sendFile(path.join(__dirname, './public/informazioniAlloggio.html'));
  });

app.get('/logout', function(req, res){
    res.cookie('jwt', '', {maxAge: 1});
    res.clearCookie('jwt');
    res.redirect('/login');
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, './public/addHome.html'));
  });
app.get('/profilo', function(req, res) {
    res.sendFile(path.join(__dirname, './public/profilo.html'));
  });

  app.get('/ricerca', function(req, res) {
    res.sendFile(path.join(__dirname, './public/ricercaAlloggi.html'));
  });
  
app.get('/nuovotour', function(req, res) {
  res.sendFile(path.join(__dirname, './public/nuovoTour.html'));
  });
//app.use('/static', express.static('public'));
app.listen(process.env.PORT || 8081, '0.0.0.0', () => {
    console.log(`Scroccotour UI server started`);
  });
