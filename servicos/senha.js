import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const saltRounds = 10;
const prisma = new PrismaClient();

export function criptografaSenha(senha) {
  const hash = bcrypt.hashSync(senha, saltRounds);
  return hash;
}

export async function validaSenha(senha, idUsuario) {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario,
    },
  });
  return bcrypt.compareSync(senha, usuario.senha);
}