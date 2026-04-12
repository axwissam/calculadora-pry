const fs = require('fs');
let c = fs.readFileSync('app/components/BannerNomad.jsx', 'utf8');
c = c.replace('width="1024" height="275"', 'width="665" height="179"');
fs.writeFileSync('app/components/BannerNomad.jsx', c);
console.log('OK');
