import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put usuario!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete usuario!');
});

export default router;

