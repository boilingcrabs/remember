const mysql = require('mysql');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'remember',
    charset: 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.hasTable('user').then((exist) => {
  if (!exist) {
    bookshelf.knex.schema.createTable('user', (user) => {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
    }).then((table) => {
      console.log(table, ' table created!');
    });
  }
});

module.exports = bookshelf;
