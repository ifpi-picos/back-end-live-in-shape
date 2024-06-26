import { PrismaClient } from '@prisma/client';
import Express from 'express';
import Autenticacao from '../../servicos/Autenticacao.js';

const router = Express.Router();
const prisma = new PrismaClient();
const autenticacao = new Autenticacao();

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const { email, senha } = req.body;
    const { token, cliente } = await autenticacao.login(email, senha);
    res.json({ token, cliente });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

export default router;