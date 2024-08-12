import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    try {
        // Extrair e validar dados
        const { diaSemana } = req.body;
        const { horaInicio } = req.body;
        const { horaFim } = req.body;
        console.log('Dados recebidos:', { diaSemana, horaInicio, horaFim });

        if (!diaSemana || !horaInicio || !horaFim) {
            console.log('Dados inválidos:', { diaSemana, horaInicio, horaFim });
            return res.status(400).json({ error: 'Dados inválidos' });
        }

        // Criar disponibilidade no banco de dados
        const disponibilidade = { diaSemana, horaInicio, horaFim}
         await prisma.disponibilidade.create({
            data: { diaSemana, horaInicio, horaFim },
        });
        
        console.log('Disponibilidade criada:', disponibilidade);
        res.status(201).json(disponibilidade);
    } catch (error) {
        
    }
});

export default router;
