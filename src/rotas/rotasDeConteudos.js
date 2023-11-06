import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const conteudos = await prisma.conteudos.findMany({});
  res.send('Get conteúdos.');
});

router.post('/', async (req, res) => {
  const conteudos = req.body;
  await prisma.conteudos.create({
    data: conteudos,
});
  res.status(201).send('Post conteudos!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const conteudo = await prisma.conteudo.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put conteúdo!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete conteúdo!');
});

export default router;



