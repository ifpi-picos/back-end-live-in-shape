import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const chaveSecretaToken = '1skljaksdj9983498327453lsldkjf';

class Autenticacao {
  constructor() {
    this.prisma = new PrismaClient();
  }

  gerarToken(cliente) {
    const token = jwt.sign({ id: cliente.id }, chaveSecretaToken, {
      expiresIn: '1d',
    });
    return token;
  }

  async login(email, senha) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        email: email,
      },
    });

    if (cliente === null) {
      console.log('email não encontrado', email);
      throw new Error('Invalid Email or Password!');
    }

    const senhaValida = bcrypt.compareSync(senha, cliente.senha);
    if (!senhaValida) {
      throw new Error('Invalid Email or Password!');
    }
    const token = this.gerarToken(cliente);
    const { nome } = cliente;
    return { token, cliente: { nome, email } };
  }
}

export default Autenticacao;