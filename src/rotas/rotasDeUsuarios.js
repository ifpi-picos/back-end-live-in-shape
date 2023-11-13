import { PrismaClient } from '@prisma/client';
import Express from 'express';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({});
  res.send(usuarios);
});

router.post('/', async (req, res) => {
  const usuario = req.body;
  await prisma.usuario.create({
    data: usuario,
  });
  res.status(201).send('Usuário salvo com sucesso!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  await prisma.usuario.update({
    where: { id: parseInt(id) },
    data: { nome: nome },
  });
  res.send('Usuário alterado com sucesso!');
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.usuario.delete({
    where: { id: parseInt(id) },
  });
  res.send('Usuário removido com sucesso!');
});

export default router;
