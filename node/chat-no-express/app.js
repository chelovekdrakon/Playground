const http = require('http');
const express = require('express');
const config = require('./config');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log = require('./libs/log')(module);
const errorHandler = require('errorhandler')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // Если URL = favicon.ico -> выдает favicon

if (app.get('env') === 'dev') {
  // выводит какой к нам пришел запрос ('формат логирования')
  app.use(logger('dev'));
} else {
  app.use(logger('default'));
}

// разбирает тело запроса (form, json) => req.body.propery
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser req.headers.cookie => req.cookie ('необязтаельный ключ, которым cookie будут подписываться')
app.use(cookieParser());

// Позволяет удобным образом говорить какие запросы будут как обработаны (middleware)
// app.get / .put / .post / .delete
// + можно передовать параметры
// app.use(app.router); -> has been removed

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'My first express app'
  })
});


// Если предыдущие middleware не смогли обработать запрос, то он смотрит есть ли в public dir
// соответствующий файл (раздает статику)
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.url === '/') {
    res.end('Hello');
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  if (app.get('env') === 'dev') {
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});


http.createServer(app).listen(config.get('port'), () => {
  log.info('Express app handler listen on port ' + config.get('port'));
});
