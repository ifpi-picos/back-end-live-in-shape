import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha_pro } from '../../servicos/senha_pro.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { emailPro, sobreNomePro, nomePro, nascimentoPro, senhaPro, cpfPro, telefonePro } = req.body;
    
    // Criptografando a senha
    const senhaCriptografada = criptografaSenha_pro(senhaPro);

    // Criando o profissional
    await prisma.profissional.create({
      data: {
        nome: nomePro,
        sobreNome: sobreNomePro,
        nascimento: nascimentoPro,
        cpf: cpfPro,
        telefone: telefonePro,
        email: emailPro,
        senha: senhaCriptografada,
      },
    });

    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error('Erro ao salvar usuário:', erro);
    res.status(400).send('Erro ao salvar usuário!');
  }
});

export default router;
