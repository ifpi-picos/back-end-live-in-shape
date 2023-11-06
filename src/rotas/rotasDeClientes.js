import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const clientes = await prisma.clientes.findMany({});
  res.send('Get clientes.');
});

router.post('/', async (req, res) => {
  const clientes = req.body;
  await prisma.clientes.create({
    data: clientes,
});
  res.status(201).send('Post clientes!');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put cliente!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete cliente!');
});

export default router;

