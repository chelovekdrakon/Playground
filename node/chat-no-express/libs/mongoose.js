const mongoose = require('mongoose');
const config = require('../config');
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
// синтаксис nconf - объект:подобъект

module.exports = mongoose;
