const async = require('async');
const mongoose = require('./libs/mongoose');

const open = (callback) => {
  mongoose.connection.on('open', callback);
};

const dropDatabase = (callback) => {
  const db = mongoose.connection;
  db.dropDatabase(callback);
};

const requireModels = (callback) => {
  require('./models/user');

  async.each(Object.keys(mongoose.models), (modelName, callback) => {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

const createUsers = (callback) => {
  const users = [
    {username: "Vasya", password: "qwe"},
    {username: "qwe", password: "qwe"},
    {username: "Galla", password: "qwe"}
  ];
  async.each(users, (userData, callback) => {
    const user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
};

async.series([
  open,
  dropDatabase,
  requireModels,
  createUsers
], (err) => {
  mongoose.disconnect();
  process.exit(err ? 255 : 0);
});
