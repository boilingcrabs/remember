const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('./db/db');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = db.Model.extend({ tableName: 'user' });
const Picture = db.Model.extend({ tableName: 'picture' });
const Scoreboard = db.Model.extend({ tableName: 'scoreboard' });

const PORT = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../app/dist`));
app.use(session({ secret: 'there is no secret' }));
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport, User);

app.route('/Signup').post(passport.authenticate('local-signup'), (req, res) => {
  console.log(req.body);
  res.send('hello world!');
});

app.route('/Signin').post(passport.authenticate('local'), (req, res) => {
  res.send('welcome back!');
});

app.route('*').get((req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/dist', 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server now listening on port ${PORT}`);
  }
});