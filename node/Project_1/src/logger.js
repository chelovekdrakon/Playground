module.exports = function (module) {

  return function (...args) {
    console.log.apply(console, [module.filename].concat(...args));
  }

};
