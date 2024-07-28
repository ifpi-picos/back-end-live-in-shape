import Express from 'express';
import { PrismaClient } from '@prisma/client';
import { criptografaSenha_pro } from '../../servicos/senha_pro.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { nomePro, sobreNomePro, nascimentoPro, cpfPro, telefonePro, emailPro, senhaPro } = req.body;
    const senhaCriptografada_pro = criptografaSenha_pro(senhaPro);

    const profissional = {
      nome: nomePro,
      sobreNome: sobreNomePro,
      nascimento: new Date(nascimentoPro),
      cpf: cpfPro,
      telefone: telefonePro,
      email: emailPro,
      senha: senhaCriptografada_pro
    };

    await prisma.profissional.create({
      data: profissional,
    });

    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error('Erro ao salvar usuário:', erro);
    res.status(400).send('Erro ao salvar usuário!');
  }
});

export default router;
