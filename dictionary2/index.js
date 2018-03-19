const fs = require('fs');
  
// const wordListPath = require('word-list');
// const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

const wordArray = fs.readFileSync('./wow.txt', 'utf8').split('\n');
const suitableWords = wordArray.filter(word => word.length >= 3 && word.length <= 8);

const stream = fs.createWriteStream('./wowSuit.txt', {encoding: 'utf8'});
stream.write(suitableWords.join('\r\n'));
stream.end();
