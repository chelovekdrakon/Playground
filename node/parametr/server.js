// supervisor -- server.js --port=3000

const http = require('http');
const argv = require('optimist').argv;

console.log(argv.port);

http.createServer((req, res) => {
  res.end('Server is running');
}).listen(3000);
