let phrases;

exports.connect = function () {
  phrases = require('./ru');
};

exports.getPhrase = function (name) {
  if (!phrases[name]) {
    throw (new Error(`No such phrase as ${name}`));
  } else {

    return phrases[name];
  }
};
