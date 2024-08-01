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
    const { tipo } = req.body;
    const senhaCriptografada = criptografaSenha(senha);

    if(tipo !== 'cliente' && tipo !== 'profissional'){
      return res.status(400).send('Informe o tipo correto');
    }

    const usuario = { nome, email, telefone, sobreNome, nascimento, cpf, tipo, senha: senhaCriptografada};

    await prisma.usuario.create({
      data: usuario,
    });
    
    res.status(201).send('Usuário salvo com sucesso!');
  } catch (erro) {
    console.error(erro);
    res.status(400).send('Erro ao salvar usuario!', erro);
  }
});
export default router;