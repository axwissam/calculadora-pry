const fs = require('fs');
let c = fs.readFileSync('.env.local', 'utf8');
c = c.replace(
  'SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzY3R4endta29haWdjYnJ2aGlxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDczOTgxNSwiZXhwIjoyMDkwMzE1ODE1fX0.1mK4SQc6PqBr22ofyIVCo-5K2AM9kAEEVrwR7mFYp60',
  'SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzY3R4endta29haWdjYnJ2aGlxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDczOTgxNSwiZXhwIjoyMDkwMzE1ODE1fQ.1mK4SQc6PqBr22ofyIVCo-5K2AM9kAEEVrwR7mFYp60'
);
fs.writeFileSync('.env.local', c);
console.log('OK');
