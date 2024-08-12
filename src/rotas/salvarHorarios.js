import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { diaSemana } = req.body;
    const { horaInicio } = req.body;
    const { horaFim } = req.body;
    const usuarioId =  localStorage.getItem('usuarioId');

    const disponibilidade = { diaSemana, horaInicio, horaFim, usuarioId};

    await prisma.disponibilidade.create({
        data: disponibilidade,
      });
      res.status(201).send('Horário salvo com sucesso!');
});

export default router;
