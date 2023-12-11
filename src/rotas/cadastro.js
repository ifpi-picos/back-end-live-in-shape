import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha } from '../servicos/senha.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    const usuario = { nome, email, senha: criptografaSenha(senha) };
    await prisma.usuario.create({
      data: usuario,
    });
    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(400).send('erro ao salvar usuario!');
  }
});

export default router;