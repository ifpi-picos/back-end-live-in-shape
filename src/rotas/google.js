const { PrismaClient } = require('@prisma/client');
const { google } = require('googleapis');

// Inicializar Prisma
const prisma = new PrismaClient();

// Obter token do Google
const googleToken = req.body.googleToken;

// Trocar token do Google por token do Supabase
const supabaseToken = await exchangeGoogleTokenForSupabaseToken(googleToken);

// Salvar token do Supabase no banco de dados
await prisma.user.update({
  where: { id: 1 }, // Substitua 1 pelo ID do usuário
  data: { supabaseToken },
});

// Usar token do Supabase para fazer requisições autenticadas
const supabaseClient = new SupabaseClient('https://your-supabase-project-urlhttps://lldvmurqmxurewopswzw.supabase.co', supabaseToken);
const { data } = await supabaseClient.auth.fetchUser();
console.log(data); // Dados do usuário autenticado