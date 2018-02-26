const http = require('http');
const fs = require('fs');
const chat = require('./chat');

http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      sendFile('index.html', res);
      break;
    }

    case '/subscribe' : {
      chat.subscribe(req, res);
      break;
    }

    case '/publish' : {
      let body = '';

      req
        .on('readable', () => {
          body += req.read();

          if (body.length >= 1e4) {
            res.statusCode = 413;
            res.end('Tooooo big file i got from you, boy');
          }
        })
        .on('end', () => {
          try {
            body = JSON.parse(body);
          } catch (e) {
            res.statusCode = 400;
            res.end('Bad request');
            return;
          }
        });

        chat.publish(body.message);
        res.end('ok');

      break;
    }

      break;
    default:

  }
}).listen(3000);

function sendFile(fileName, res) {
  const fileStrem = fs.createReadStream(fileName);
  fileStrem.pipe(res);
  fileStrem.on('close', () => {
    fileStrem.destroy();
  });
  fileStrem.on('error', (e) => {
    console.log(e, 'this is error');
  })
};
