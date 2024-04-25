import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const chaveSecretaTokenPro = '1skljaksdj9983498327453lsldkj';

class Autenticacao_pro {
  constructor() {
    this.prisma = new PrismaClient();
  }

  gerarToken(profissional) {
    const token = jwt.sign({ id: profissional.id }, chaveSecretaTokenPro, {
      expiresIn: '1d',
    });
    return token;
  }

  async login(emailPro, senhaPro) {
    const profissional = await this.prisma.profissional.findUnique({
      where: {
        emailPro: emailPro,
      },
    });

    if (profissional === null) {
      console.log('email não encontrado', emailPro);
      throw new Error('Invalid Email or Password!');
    }

    const senhaValida_pro = bcrypt.compareSync(senhaPro, profissional.senhaPro);
    if (!senhaValida_pro) {
      throw new Error('Invalid Email or Password!');
    }
    const token = this.gerarToken(profissional);
    const { nomePro } = profissional;
    return { token, profissional: { nomePro, emailPro } };
  }
}

export default Autenticacao_pro;
