import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();
router.post('/', async (req, res) => {
    try {
        const { diaSemana, horaInicio, horaFim } = req.body;
        const usuarioId = req.userId; // Pegando o userId do middleware de autenticação

        console.log('Dados recebidos:', { diaSemana, horaInicio, horaFim, usuarioId });

        const disponibilidade = { diaSemana, horaInicio, horaFim, usuarioId };

        await prisma.disponibilidade.create({
            data: disponibilidade,
        });
        
        res.status(201).send('Horário salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar horário:', error);
        res.status(500).send('Erro ao salvar horário.');
    }
});

export default router;
