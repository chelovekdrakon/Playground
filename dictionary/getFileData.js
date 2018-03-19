const path = require('path');
const log = require('./libs/log')(module);
const fs = require('fs');

const getFileData = (filePath, fileName) => {
    return new Promise((res, rej) => {
        const fileStream = fs.createReadStream(path.join(filePath, fileName), {encoding: 'utf-8'});
        let data = '';

        fileStream.on('open', () => {
            log.info(`${fileName} file have been opened`);
        });

        fileStream.on('data', (chunk) => {
            data += chunk;
            log.info(data);
        });

        fileStream.on('close', () => {
            log.info(`${fileName} file have been closed`);
            fileStream.destroy();
        });

        fileStream.on('error', (err) => {
            err.code === 'ENOENT' ? log.error('no such file or directory') : log.error(err);
            rej(err);
        });

        fileStream.on('end', () => {
            log.info(`File ${fileName} have been read and now will start processing...`);
            res(data);
        });
    })
}

module.exports = getFileData;
