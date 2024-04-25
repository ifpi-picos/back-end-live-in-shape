import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const saltRounds = 10;
const prisma = new PrismaClient();

export function criptografaSenha_pro(senhaPro) {
  const hash = bcrypt.hashSync(senhaPro, saltRounds);
  return hash;
}

export async function validaSenha_pro(senhaPro, idProfissional) {
  const profissional = await prisma.profissional.findUnique({
    where: {
      id: idProfissional,
    },
  });
  return bcrypt.compareSync(senhaPro, profissional.senhaPro);
}
