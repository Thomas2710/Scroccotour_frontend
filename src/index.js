const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

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
    res.status(200);
    res.redirect('/home');
});
//app.use('/static', express.static('public'));
app.listen(process.env.PORT || 8081, '0.0.0.0', () => {
    console.log(`Scroccotour UI server started`);
  });
