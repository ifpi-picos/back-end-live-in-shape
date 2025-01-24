const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());
app.use(cors());

// Endpoint para adicionar uma dica
app.post('/src/rotasdica.js', async (req, res) => {
    try {
        const { topico, conteudo } = req.body;

        // Validação básica
        if (!topico || !conteudo) {
            return res.status(400).json({ error: 'Tópico e conteúdo são obrigatórios!' });
        }

        // Criação da dica no banco de dados
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
app.get('/profissional/listar_dicas', async (req, res) => {
    try {
        const dicas = await prisma.dica.findMany();
        res.status(200).json(dicas);
    } catch (error) {
        console.error('Erro ao listar dicas:', error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
});

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
