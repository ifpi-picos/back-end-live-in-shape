import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const dietas = await prisma.chat.findMany({});
  res.send('Get dietas.');
});

router.post('/', async (req, res) => {
  const dietas = req.body;
  await prisma.dietas.create({
    data: dietas,
});
  res.status(201).send('Post dietas!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const dieta = await prisma.dieta.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put dieta!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete dieta!');
});

export default router;