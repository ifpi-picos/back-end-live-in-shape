import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
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
                    diaSemana: 'Segunda-feira', // Ajuste conforme necessário
                    horaInicio: horario.inicio,
                    horaFim: horario.fim,
                    usuarioId: usuarioId,
                }
            })
        ));

        res.status(200).json(horariosSalvos);
    } catch (error) {
        console.error('Erro ao salvar horários:', error);
        res.status(500).json({ message: 'Erro ao salvar horários' });
    }
});

export default router;
