const http = require('http');
const url = require('url');

const server = http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', (req, res) => {
  console.log(req.method, req.url);
  const urlParsed = url.parse(req.url, true);
  if (urlParsed.query.message && urlParsed.pathname === '/echo') {
    res.end(`${urlParsed.query.message}`)
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
})
