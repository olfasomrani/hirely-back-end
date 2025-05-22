
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@example.com',
      password: 'admin1234', 
      role: 'Admin',
    },
  });

  console.log('Admin user seeded ✔️');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
