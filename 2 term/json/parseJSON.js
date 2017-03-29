const data = require('./data.json');

parseJSON(data);

function parseJSON(json = {}, ident = 0) {
  if (json && typeof json === 'object') {
    for (const [k, v] of Object.entries(json)) {
      console.log(`${' '.repeat(ident)}${k}: ${!v || typeof v !== 'object' ? v : ''}`);
      parseJSON(v, ident + 2);
    }
  }
}
