const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

// Registrar disponibilidade para um profissional (usuário do tipo 'profissional')
app.post('/disponibilidades', async (req, res) => {
  const { usuarioId, diaSemana, horaInicio, horaFim } = req.body;

  // Verificar se o usuário é do tipo 'profissional'
  const usuario = await prisma.usuario.findUnique({
    where: { id: usuarioId },
  });

  if (usuario.tipo !== 'profissional') {
    return res.status(400).json({ error: 'Usuário não é um profissional.' });
  }

  const novaDisponibilidade = await prisma.disponibilidade.create({
    data: {
      diaSemana,
      horaInicio,
      horaFim,
      usuarioId,
    },
  });

  res.json(novaDisponibilidade);
});

// Listar disponibilidades de um profissional (usuário do tipo 'profissional')
app.get('/disponibilidades/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;

  const disponibilidades = await prisma.disponibilidade.findMany({
    where: {
      usuarioId: parseInt(usuarioId),
    },
  });

  res.json(disponibilidades);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
