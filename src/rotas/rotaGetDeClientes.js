import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const clientes = await prisma.cliente.findMany({});
  res.send(clientes);
});

export default router;

