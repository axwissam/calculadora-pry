const fs = require('fs');
let c = fs.readFileSync('app/layout.jsx', 'utf8');
c = c.replace(
  "verification: {",
  "other: { 'google-adsense-account': 'ca-pub-1540142556511946' },\n  verification: {"
);
fs.writeFileSync('app/layout.jsx', c, 'utf8');
console.log('OK:', c.includes('ca-pub-1540142556511946') ? 'SIM' : 'NAO');
