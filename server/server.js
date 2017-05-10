const express = require('express');
const db = require('./db/db');
const path = require('path');
const User = db.Model.extend({ tableName: 'user' });
const Picture = db.Model.extend({ tableName: 'picture' });
const Scoreboard = db.Model.extend({ tableName: 'scoreboard' });

const bodyParser = require('body-parser');

const PORT = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../app/dist`));

app.route('/Signup').post((req, res) => {
  console.log(req.body);
  new User({ username: req.body.username }).fetch().then((model) => {
    console.log('fetching the data');
    console.log(model.get('username'));
    res.status(500).send('user already exists');
  }).catch(() => {
    User.forge({
      username: req.body.username,
      password: req.body.password
    }).save().then((user) => {
      res.json({ error: false, data: { id: user.get('id') } });
    }).catch((error) => {
      res.status(500).json({ error: true, data: { error: error }});
    });
  });
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