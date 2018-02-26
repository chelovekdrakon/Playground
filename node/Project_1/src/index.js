const db = require('./db');
db.connect();

const log = require('./logger')(module);

const User = require('./user');

function run() {

const vasya = new User('vasya');
const petya = new User('petya');
vasya.hello(petya);

log(db.getPhrase(`Run successfully`));
}


if (module.parent) {
  exports.run = run;
} else {
  run();
}
