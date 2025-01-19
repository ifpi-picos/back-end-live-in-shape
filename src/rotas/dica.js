const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Middleware para interpretar JSON e configurar CORS
app.use(bodyParser.json());
app.use(cors());

// Rota para adicionar dicas
app.post('/dicas', async (req, res) => {
    const { topico, conteudo } = req.body;

    // Validação básica
    if (!topico || !conteudo) {
        return res.status(400).json({ error: 'Tópico e conteúdo são obrigatórios!' });
    }

    try {
        // Salvando a dica no banco de dados
        const novaDica = await prisma.dica.create({
            data: {
                topico,
                conteudo,
            },
        });

        res.status(201).json({ message: 'Dica salva com sucesso!', dica: novaDica });
    } catch (error) {
        console.error('Erro ao salvar a dica:', error);
        res.status(500).json({ error: 'Erro ao salvar a dica no banco de dados!' });
    }
});

// Rota para listar todas as dicas (opcional)
app.get('/dicas', async (req, res) => {
    try {
        const dicas = await prisma.dica.findMany();
        res.status(200).json(dicas);
    } catch (error) {
        console.error('Erro ao listar dicas:', error);
        res.status(500).json({ error: 'Erro ao buscar dicas!' });
    }
});

// Inicializando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
