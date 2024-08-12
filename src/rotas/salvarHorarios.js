import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { diaSemana, horaInicio, horaFim } = req.body;
    const usuarioId = req.userId; // Use o userId decodificado
  
    const disponibilidade = { diaSemana, horaInicio, horaFim, usuarioId };
  
    try {
      await prisma.disponibilidade.create({
        data: disponibilidade,
      });
      res.status(201).send('Horário salvo com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao salvar horário: ' + error.message);
    }
  });
export default router;
