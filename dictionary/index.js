const log = require('./libs/log')(module);
const fs = require('fs');
const getFileData = require('./getFileData');
const https = require('https');
const config = require('./config');
const app = require('./app');


const port = config.get('port');
https.createServer(app).listen(port, () => log.info('App listen on port ' + port));


const base = require.resolve('dictionary-en-us').split('/').slice(0, -1).join('\/');

getFileData(base, 'index.dic')
.then(data => {
    log.info(data);
});
