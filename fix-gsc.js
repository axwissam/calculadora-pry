const fs = require('fs');
let c = fs.readFileSync('app/layout.jsx', 'utf8');
c = c.replace(
  "verification: {\n    google: 'FvyVSV9GmSQ3VcCeGuRSAzhrmRZYQgxVenkPzl24xM0',\n  },",
  "verification: {\n    google: ['FvyVSV9GmSQ3VcCeGuRSAzhrmRZYQgxVenkPzl24xM0', 'Wc8qhXHXLgmqiw8erVYHdkcmqk3IqmXXMMvEPxN3Z74'],\n  },"
);
fs.writeFileSync('app/layout.jsx', c, 'utf8');
console.log('OK:', c.includes('Wc8qhXHXLgmqiw8erVYHdkcmqk3IqmXXMMvEPxN3Z74') ? 'SIM' : 'NAO');
