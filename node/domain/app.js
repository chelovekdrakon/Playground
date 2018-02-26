const domain = require('domain');
const serverDomain = domain.create();

serverDomain.on('error', function(e) {
  console.log('Domain got' , e);
});

serverDomain.run(function() {
  const server = require('./server');
  server.listen(3000)
});
