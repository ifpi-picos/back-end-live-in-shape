import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para interpretar JSON no corpo da requisição
router.use(express.json());
router.use(cors({
    origin: 'https://goodshape.netlify.app',
}));

// Endpoint para adicionar uma dica
router.post('/adicionar_dicas', async (req, res) => {
    try {
        const { topico, conteudo } = req.body;

        if (!topico || !conteudo) {
            return res.status(400).json({ error: 'Tópico e conteúdo são obrigatórios!' });
        }

        const novaDica = await prisma.dica.create({
            data: {
                topico,
                conteudo,
            },
        });

        res.status(201).json({ message: 'Dica criada com sucesso!', dica: novaDica });
    } catch (error) {
        console.error('Erro ao criar dica:', error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
});

// Endpoint para listar todas as dicas
router.get('/listar_dicas', async (req, res) => {
    try {
        const dicas = await prisma.dica.findMany();
        res.status(200).json(dicas);
    } catch (error) {
        console.error('Erro ao listar dicas:', error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
});

export default router; // Exporta o router
