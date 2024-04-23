import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha } from '../../servicos/senha.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { emailPro } = req.body;
    const { sobreNomePro } = req.body;
    const {  nomePro } = req.body;
    const { nascimentoPro } = req.body;
    const {senhaPro } = req.body;
    const { cpfPro } = req.body;
    const { telefonePro } = req.body;
    const { profissao } = req.body;
    const senhaCriptografada = criptografaSenha(senhaPro);
    console.log('senhaCriptografada', senhaCriptografada)
    const profissional = {  nomePro, emailPro, telefonePro, sobreNomePro, nascimentoPro, cpfPro, profissao, senhaPro: senhaCriptografada};
    await prisma.profissinal.create({
      data: profissional,
    });
    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(400).send('erro ao salvar usuario!');
  }
});

export default router;
