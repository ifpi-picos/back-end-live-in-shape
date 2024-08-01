import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
    where:{
      tipo: 'cliente'
    }
  });
  res.send(usuarios);
});

export default router;

