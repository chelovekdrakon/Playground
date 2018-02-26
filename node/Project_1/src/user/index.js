const db = require('../db');


class User {
  constructor(name) {
    this.name = name;
  }
  hello(who) {
    console.log(db.getPhrase('Hello') + ` ${who.name}!`);
  }
}

module.exports = User;
