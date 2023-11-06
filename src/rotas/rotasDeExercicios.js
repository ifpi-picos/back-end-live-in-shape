import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const exercicios = await prisma.exercicios.findMany({});
  res.send('Get exercícios.');
});

router.post('/', async (req, res) => {
  const exercicios = req.body;
  await prisma.exercicios.create({
    data: exercicios,
});
  res.status(201).send('Post exercícios!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const exercicio = await prisma.exercicio.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put exercício!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete exercício!');
});

export default router;