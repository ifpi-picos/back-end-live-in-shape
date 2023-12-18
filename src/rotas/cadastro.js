import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha } from '../../servicos/senha.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const { sobreNome } = req.body;
    const { nome } = req.body;
    const { nascimento } = req.body;
    const { senha } = req.body;
    const { cpf } = req.body;
    const { telefone } = req.body;
    const senhaCriptografada = criptografaSenha(senha);
    console.log('senhaCriptografada', senhaCriptografada)
    const cliente = { nome, email, telefone, sobreNome, nascimento, cpf, senha: senhaCriptografada};
    await prisma.cliente.create({
      data: cliente,
    });
    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(400).send('erro ao salvar usuario!');
  }
});

export default router;