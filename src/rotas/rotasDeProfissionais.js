import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const profissionais = await prisma.profissional.findMany({
    where:{
       tipo: 'profissional'
    }
  });
  res.send(profissionais);
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const profissional = await prisma.profissional.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.send('Put profissional!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete profissional!');
});

export default router;