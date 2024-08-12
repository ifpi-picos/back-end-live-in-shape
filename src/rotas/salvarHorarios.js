import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/salvar-horarios', async (req, res) => {
    const { horarios } = req.body;
    const usuarioId = 1; // Substitua isso pelo ID do usuário logado

    try {
        // Limpar horários antigos
        await prisma.disponibilidade.deleteMany({
            where: { usuarioId: usuarioId }
        });

        // Adicionar novos horários
        const horariosSalvos = await Promise.all(horarios.map(horario =>
            prisma.disponibilidade.create({
                data: {
                    diaSemana: horario.diaSemana,
                    horaInicio: horario.horaInicio,
                    horaFim: horario.horaFim,
                    usuarioId: usuarioId
                }
            })
        ));

        res.status(200).send('Horários salvos com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar horários:', error);
        res.status(400).send('Erro ao salvar horários!');
    }
});

export default router;
