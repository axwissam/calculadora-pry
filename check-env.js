require('dotenv').config();
console.log('URL:', process.env.SUPABASE_URL);
console.log('KEY length:', process.env.SUPABASE_SERVICE_KEY ? process.env.SUPABASE_SERVICE_KEY.length : 'undefined');
console.log('KEY start:', process.env.SUPABASE_SERVICE_KEY ? process.env.SUPABASE_SERVICE_KEY.substring(0, 50) : 'undefined');
console.log('KEY end:', process.env.SUPABASE_SERVICE_KEY ? process.env.SUPABASE_SERVICE_KEY.slice(-20) : 'undefined');
