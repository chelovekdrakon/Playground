const sandbox = require('./sandbox');

const multTwo = (fetch, number) => {
    if (typeof fetch === 'function ') {
        fetch(sandbox.URL);
    }

    return Promise.resolve(number * 2);
};

module.exports = multTwo;
