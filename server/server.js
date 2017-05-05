const express = require('express');
const db = require('./db/db');
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
  User.forge({
    username: req.body.username,
    password: req.body.password
  }).save().then((user) => {
    res.json({ error: false, data: { id: user.get('id') } });
  }).catch((error) => {
    res.status(500).json({ error: true, data: { error: error }});
  });
});


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server now listening on port ${PORT}`);
  }
});