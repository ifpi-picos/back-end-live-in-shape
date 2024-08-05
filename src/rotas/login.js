import { PrismaClient } from '@prisma/client';
import Express from 'express';
import Autenticacao from '../../servicos/Autenticacao.js';

const router = Express.Router();
const prisma = new PrismaClient();
const autenticacao = new Autenticacao();

router.post('/', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const { token, usuario } = await autenticacao.login(email, senha);

    // Verifique o tipo do usuário
    const usuarioTipo = await prisma.usuario.findUnique({
      where: { email: email },
      select: { tipo: true }
    });

    res.json({
      token,
      usuario,
      tipo: usuarioTipo.tipo // Inclua o tipo de usuário na resposta
    });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

export default router;
