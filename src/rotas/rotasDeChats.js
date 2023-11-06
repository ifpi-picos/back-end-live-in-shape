import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const chats = await prisma.chat.findMany({});
  res.send('Get chats.');
});

router.post('/', async (req, res) => {
  const chats = req.body;
  await prisma.chat.create({
    data: chats,
});
  res.status(201).send('Post chats!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const chat = await prisma.chat.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put chat!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete chat!');
});

export default router;
