const fs = require('fs');
  
// const wordListPath = require('word-list');
// const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

const wordArray = fs.readFileSync('./frequentlyUsed.txt', 'utf8').split('\n');
const suitableWords = wordArray.filter(word => word.length >= 3 && word.length <= 8);

const stream = fs.createWriteStream('./result.json', {encoding: 'utf8'});
stream.write(JSON.stringify(suitableWords));
stream.end();
