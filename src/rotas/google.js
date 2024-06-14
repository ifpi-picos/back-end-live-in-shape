const { PrismaClient } = require('@prisma/client');
const { google } = require('googleapis');

const prisma = new PrismaClient();

const googleToken = req.body.googleToken;

const supabaseToken = await exchangeGoogleTokenForSupabaseToken(googleToken);

await prisma.user.update({
  where: { id: 1 }, 
  data: { supabaseToken },
});

const supabaseClient = new SupabaseClient('https://your-supabase-project-urlhttps://lldvmurqmxurewopswzw.supabase.co', supabaseToken);
const { data } = await supabaseClient.auth.fetchUser();
console.log(data); 