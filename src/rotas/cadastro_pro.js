import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha_pro } from '../../servicos/senha_pro.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { email, sobreNome, nome, nascimento, senha, cpf, telefone, profissao, bio, diploma } = req.body;

    // Validação básica dos campos obrigatórios
    if (!email || !sobreNome || !nome || !nascimento || !senha || !cpf || !telefone || !profissao) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    // Criptografia da senha
    const senhaCriptografada = criptografaSenha_pro(senha);
    console.log('Senha criptografada:', senhaCriptografada);

    const profissional = {
      nome,
      email,
      telefone,
      sobreNome,
      nascimento: new Date(nascimento),
      cpf,
      profissao,
      senha: senhaCriptografada,
      bio,
      diploma
    };

    // Tentativa de criação do registro no banco de dados
    const novoProfissional = await prisma.profissional.create({
      data: profissional,
    });

    res.status(201).json(novoProfissional);
  } catch (erro) {
    console.error('Erro ao salvar profissional:', erro);
    res.status(400).send('Erro ao salvar usuário!');
  }
});

export default router;
