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
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, './public/addHome.html'));
  });
//app.use('/static', express.static('public'));
app.listen(process.env.PORT || 8081, '0.0.0.0', () => {
    console.log(`Scroccotour UI server started`);
  });
