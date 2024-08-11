import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

// Rota para listar profissionais
router.get('/', async (req, res) => {
  try {
    const profissionais = await prisma.usuario.findMany({
      where: {
        tipo: 'profissional'
      },
      select: {
        id: true,
        nome: true,
        sobreNome: true,
        tipo: true,
        email: true,
        telefone: true
      }
    });
    res.status(200).json(profissionais);
  } catch (error) {
    console.error('Erro ao listar profissionais:', error);
    res.status(500).json({ error: 'Erro ao listar profissionais' });
  }
});

export default router;
