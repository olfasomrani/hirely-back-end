
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function seedAdmin(prisma: PrismaClient)  {
  await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin1234', 
      role: 'Admin',
    },
  });

  console.log('Admin user seeded ✔️');
}

