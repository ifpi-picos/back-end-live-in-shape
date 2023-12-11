import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const chaveSecretaToken = '1skljaksdj9983498327453lsldkjf';

class Autenticacao {
  constructor() {
    this.prisma = new PrismaClient();
  }

  gerarToken(usuario) {
    const token = jwt.sign({ id: usuario.id }, chaveSecretaToken, {
      expiresIn: '1d',
    });
    return token;
  }

  async login(email, senha) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (usuario === null) {
      console.log('email não encontrado', email);
      throw new Error('Invalid Email or Password!');
    }

    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
      throw new Error('Invalid Email or Password!');
    }
    const token = this.gerarToken(usuario);
    const { nome } = usuario;
    return { token, usuario: { nome, email } };
  }
}

export default Autenticacao;