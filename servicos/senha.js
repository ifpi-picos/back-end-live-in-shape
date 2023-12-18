import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const saltRounds = 10;
const prisma = new PrismaClient();

export function criptografaSenha(senha) {
  const hash = bcrypt.hashSync(senha, saltRounds);
  return hash;
}

export async function validaSenha(senha, idCliente) {
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: idCliente,
    },
  });
  return bcrypt.compareSync(senha, cliente.senha);
}