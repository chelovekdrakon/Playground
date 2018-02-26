const fetch = require('node-fetch');

const PS_INSIGHT = 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed';
const SITE_CHECK = 'http://www.jfairchildlaw.com/';
const KEY = 'AIzaSyBY2Bnk-hSnrWfHdwsPauPolFHdlxQIX-s';

exports.URL = `${PS_INSIGHT}?url=${SITE_CHECK}&key=${KEY}`;

exports.getJSON =
    fetch(`${URL}`)
    .then(response => response.json());
